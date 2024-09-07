require('dotenv').config();
const jwt = require('jsonwebtoken');

async function isAuth(req, res, next) {

  let token = null;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.BEARER);
      req.jwtUser = decoded;
      return next()
    } catch (error) {
      // Handle token verification error
      console.error('Token verification error:', error);
     return res.status(401).json({custom:true,message:"Invalid or expired token"})
    }
  }

  return res.status(401).json({ custom: true, message: 'Authentication required' });
}

module.exports = isAuth;
