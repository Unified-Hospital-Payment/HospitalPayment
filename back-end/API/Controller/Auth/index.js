// Auth/index.js

const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'; // Set JWT_SECRET in your env variables
  return jwt.sign(user, secretKey, { expiresIn: '80000s' });
};

module.exports = { generateAccessToken };
