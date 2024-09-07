const prisma = require("../../DB/Prisma");

async function getUsers(req, res, next) {
  try {
    const users = await prisma.users.findMany();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}
module.exports = getUsers;
