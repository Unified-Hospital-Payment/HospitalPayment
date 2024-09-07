const prisma=require("../../DB/Prisma")
const bcrypt = require('bcrypt');

const { generateAccessToken } = require("./../Auth");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        throw { custom: true, message: "Email and password are required" };
      }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw { custom: true, message: "Invalid email format" };
      }
    let user = await prisma.users.findUnique({
      where: { email: email }
    });

    
    if (! user) {
      throw { custom: true, message: `User with ${email} doesn't exist` };
    }

    if (!email || !password) {
        throw { custom: true, message: "Email and password are required" };
      }
  
  
    const hashedPassword = await bcrypt.compare(password,  user.password_hash);
    
    if (!hashedPassword) {
      throw { custom: true, message: "Invalid password" };
    }

    user.password = "#############";

    let token = generateAccessToken(user);

    return res.status(200).json({ ...user, token });
  } catch (e) {
    next(e);
  }
};

module.exports = Login;
