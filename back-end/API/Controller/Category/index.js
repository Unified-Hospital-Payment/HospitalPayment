const prisma = require("../../DB/Prisma");

async function getCategory(req, res, next) {
  try {
    const category = await prisma.category.findMany();
    return res.status(200).json(category);
  } catch (error) {
    return next(error);
  }
}
module.exports = getCategory;
