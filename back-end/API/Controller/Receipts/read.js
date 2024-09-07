const prisma = require("../../DB/Prisma");

async function getReceipts(req, res, next) {
  try {
    const receipts = await prisma.receipts.findMany();
    return res.status(200).json(receipts);
  } catch (error) {
    return next(error);
  }
}
module.exports = getReceipts;
