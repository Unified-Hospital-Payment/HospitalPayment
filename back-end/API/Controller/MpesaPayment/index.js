const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const prisma = require('../../DB/Prisma');
const { createBlockchainPayment, completeBlockchainPayment } = require('../../services/blockchainService');
const { v4: uuidv4 } = require('uuid');

// Function to get M-Pesa access token
async function getAccessToken() {
  const consumer_key = process.env.CONSUMER_KEY;
  const consumer_secret = process.env.CONSUMER_SECRET;
  const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

// Function to initiate STK Push
async function stkPush(req, res) {
  try {
    const { phone, accountNumber, amount, userId, hospitalId, serviceId, doctorId } = req.body;
    let phoneNumber = phone.startsWith("0") ? "254" + phone.slice(1) : phone;

    // Generate a temporary transaction ID
    const tempTransactionId = uuidv4();

    // Create a new payment record in the database with the temporary ID
    const payment = await prisma.payments.create({
      data: {
        user_id: userId,
        hospital_id: hospitalId,
        service_id: serviceId,
        amount: parseFloat(amount),
        payment_status: 'pending',
        transaction_id: tempTransactionId,
        doctor_id: doctorId,
      },
    });

    // Get M-Pesa access token
    const accessToken = await getAccessToken();
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const auth = "Bearer " + accessToken;
    const timestamp = moment().format("YYYYMMDDHHmmss");
    const password = new Buffer.from(
      "174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp
    ).toString("base64");

    // Initiate STK Push request
    const response = await axios.post(url, {
      BusinessShortCode: "174379",
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: "174379",
      PhoneNumber: phoneNumber,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: accountNumber,
      TransactionDesc: "Mpesa Daraja API stk push test",
    }, {
      headers: {
        Authorization: auth,
      },
    });

    if (response.data.ResponseCode !== "0") {
      // If STK push fails, update the payment status
      await prisma.payments.update({
        where: { id: payment.id },
        data: { payment_status: 'failed' },
      });
      return res.status(400).json({ error: "STK Push failed", details: response.data });
    }

    // Update the payment record with the actual CheckoutRequestID
    await prisma.payments.update({
      where: { id: payment.id },
      data: { transaction_id: response.data.CheckoutRequestID },
    });

    // Create blockchain payment
    const blockchainTxHash = await createBlockchainPayment(payment.id, amount, response.data.CheckoutRequestID);

    // Create transaction record
    await prisma.transactions.create({
      data: {
        payment_id: payment.id,
        blockchain_txn_id: blockchainTxHash,
        status: 'pending',
      },
    });

    res.status(200).json({
      message: "STK push initiated successfully",
      checkoutRequestID: response.data.CheckoutRequestID,
    });

  } catch (error) {
    console.error('Error in stkPush:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Function to handle STK Push callback
async function stkPushCallback(req, res) {
  const { Body: { stkCallback } } = req.body;
  const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

  try {
    // Find the payment record
    const payment = await prisma.payments.findUnique({
      where: { transaction_id: CheckoutRequestID },
    });

    if (!payment) {
      throw new Error('Payment not found');
    }

    if (ResultCode === 0) {
      // Transaction successful
      const amount = CallbackMetadata.Item.find(item => item.Name === 'Amount').Value;
      const mpesaReceiptNumber = CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber').Value;

      // Update payment status
      await prisma.payments.update({
        where: { id: payment.id },
        data: { payment_status: 'completed' },
      });

      // Create receipt
      await prisma.receipts.create({
        data: {
          payment_id: payment.id,
          receipt_number: mpesaReceiptNumber,
          amount_paid: amount,
          details: 'M-Pesa payment',
        },
      });

      // Complete blockchain payment
      const blockchainTxHash = await completeBlockchainPayment(payment.id);

      // Update transaction status
      await prisma.transactions.update({
        where: { payment_id: payment.id },
        data: {
          status: 'completed',
          block_number: await provider.getBlockNumber(),
        },
      });
    } else {
      // Transaction failed
      await prisma.payments.update({
        where: { id: payment.id },
        data: { payment_status: 'failed' },
      });
      await prisma.transactions.update({
        where: { payment_id: payment.id },
        data: { status: 'failed' },
      });
    }

    res.status(200).json({ ResultCode, ResultDesc });
  } catch (error) {
    console.error('Error processing callback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAccessToken,
  stkPush,
  stkPushCallback,
};
