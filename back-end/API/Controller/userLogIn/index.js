const prisma=require("../../DB/Prisma")
const bcrypt = require('bcrypt');

const { generateAccessToken } = require("./../Auth");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw { custom: true, message: "Email and password are required" };
    }

    const user = await prisma.users.findUnique({
      where: { email: email }
    });

    if (!user) {
      throw { custom: true, message: `User with email ${email} doesn't exist` };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw { custom: true, message: "Invalid password" };
    }

    const token = generateAccessToken({ id: user.id, email: user.email });

    res.status(200).json({ user, token });
  } catch (e) {
    next(e);
  }
};

module.exports = Login;


