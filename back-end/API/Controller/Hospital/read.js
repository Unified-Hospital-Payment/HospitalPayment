const prisma = require("../../DB/Prisma");

async function getHospital(req, res, next) {
  try {
    const hospitals = await prisma.hospitals.findMany();
    return res.status(200).json(hospitals);
  } catch (error) {
    return next(error);
  }
}
module.exports = getHospital;
