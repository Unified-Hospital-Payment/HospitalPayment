const axios = require('axios');
const { getAccessToken } = require('./verify'); 
require('dotenv').config();

const shortCode = process.env.MPESA_SHORTCODE;
const passKey = process.env.MPESA_PASSKEY;

const initiateSTKPush = async (phoneNumber, amount, callbackURL, accountReference, transactionDesc) => {
  try {
    // Get the access token
    const accessToken = await getAccessToken();

    // Generate timestamp and password
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${shortCode}${passKey}${timestamp}`).toString('base64');

    // Define the payload
    const payload = {
      BusinessShortCode: shortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: shortCode,
      PhoneNumber: phoneNumber,
      CallBackURL: callbackURL,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    };

    // Make the STK Push request
    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
    });

    // Return response data
    return response.data;
  } catch (error) {
    console.error('Error initiating STK Push:', error.response ? error.response.data : error.message);
    throw new Error('Failed to initiate STK Push');
  }
};

module.exports = { initiateSTKPush };
