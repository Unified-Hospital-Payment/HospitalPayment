const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

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

async function stkPush(req, res) {
  const { phone, accountNumber, amount } = req.body;
  let phoneNumber = phone.startsWith("0") ? "254" + phone.slice(1) : phone;

  try {
    const accessToken = await getAccessToken();
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const auth = "Bearer " + accessToken;
    const timestamp = moment().format("YYYYMMDDHHmmss");
    const password = new Buffer.from(
      "174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp
    ).toString("base64");

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

    res.status(200).json({
      msg: "Request is successful. Please enter M-Pesa PIN to complete the transaction",
      status: true,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Request failed",
      status: false,
    });
  }
}

function stkPushCallback(req, res) {
  const { Body: { stkCallback } } = req.body;
  const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

  console.log("MerchantRequestID:", MerchantRequestID);
  console.log("CheckoutRequestID:", CheckoutRequestID);
  console.log("ResultCode:", ResultCode);
  console.log("ResultDesc:", ResultDesc);

  const json = JSON.stringify(req.body);
  fs.writeFile("stkcallback.json", json, "utf8", (err) => {
    if (err) {
      console.error("Error saving callback:", err);
    } else {
      console.log("STK PUSH CALLBACK STORED SUCCESSFULLY");
    }
  });

  res.sendStatus(200);
}

module.exports = {
  getAccessToken,
  stkPush,
  stkPushCallback,
};
