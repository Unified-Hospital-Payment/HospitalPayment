const axios = require('axios');
require('dotenv').config();

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;

let cachedToken = null;
let tokenExpiry = null;

const getAccessToken = async () => {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  if (cachedToken && tokenExpiry && new Date() < tokenExpiry) {
    return cachedToken;
  }

  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const accessToken = response.data.access_token;
    const expiresIn = response.data.expires_in; 

    cachedToken = accessToken;
    tokenExpiry = new Date(new Date().getTime() + expiresIn * 1000);

    console.log('Access Token:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw new Error('Failed to get access token');
  }
};

module.exports = { getAccessToken };
