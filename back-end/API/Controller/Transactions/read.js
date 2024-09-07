const prisma = require("../../DB/Prisma");

async function getTransactions(req, res, next) {
  try {
    const transactions = await prisma.transactions.findMany();
    return res.status(200).json(transactions);
  } catch (error) {
    return next(error);
  }
}
module.exports =getTransactions;
