const prisma = require("../../DB/Prisma");

async function getServices(req, res, next) {
  try {
    const services = await prisma.services.findMany();
    return res.status(200).json(services);
  } catch (error) {
    return next(error);
  }
}
module.exports = getServices;
