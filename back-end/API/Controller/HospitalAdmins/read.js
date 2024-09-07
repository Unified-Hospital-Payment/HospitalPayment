const prisma = require("../../DB/Prisma");

async function getHospialAdmins(req, res, next) {
  try {
    const hospitalAdmin = await prisma.hospital_admins.findMany();
    return res.status(200).json(hospitalAdmin);
  } catch (error) {
    return next(error);
  }
}
module.exports = getHospialAdmins;
