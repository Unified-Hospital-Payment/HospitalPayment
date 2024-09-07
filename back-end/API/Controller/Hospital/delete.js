const prisma=require("../../DB/Prisma")

async function deleteHospital(req,res,next) {
    try {
        const id = req.query.id; 

        if (!id) {
            throw { custom: true, message: "ID is required" };
          }
          
          const deletedHospital = await prisma.hospitals.delete({
            where: { id: req.query.id },
          });
          
          if (!deletedHospital) {
            throw { custom: true, message: "Hospital with the provided ID not found" };
          }
          
          return res.status(200).json({ message: "Hospital deleted successfully" });
            } catch (error) {
              return next(error);
            }
          }
          
module.exports = deleteHospital;
