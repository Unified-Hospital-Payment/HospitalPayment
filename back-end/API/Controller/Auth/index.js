require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateAccessToken(doc, exp = 12) {
  return jwt.sign(doc, process.env.BEARER, { expiresIn: `${exp}hr` });
}

module.exports = { generateAccessToken };

