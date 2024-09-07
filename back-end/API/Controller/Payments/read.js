const prisma = require("../../DB/Prisma");

async function getPayments(req, res, next) {
  try {
    const payments = await prisma.payments.findMany();
    return res.status(200).json(payments);
  } catch (error) {
    return next(error);
  }
}
module.exports = getPayments;
