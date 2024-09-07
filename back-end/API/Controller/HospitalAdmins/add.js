const prisma = require("../../DB/Prisma");

async function addHospitalAdmins(req, res, next){
    try {
        const {
            user_id,
            hospital_id
        } = req.body


        const doc = await prisma.hospital_admins.create({
            data: {
            user_id,
            hospital_id
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addHospitalAdmins