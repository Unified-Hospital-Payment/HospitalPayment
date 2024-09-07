const prisma = require("../../DB/Prisma");

async function addHospital(req, res, next){
    try {
        const {
            name,
            location,
            paybill_number,
            contact_info,
            created_at,
            updated_at
        } = req.body


        const doc = await prisma.hospitals.create({
            data: {
                name,
                location,
                paybill_number,
                contact_info,
                created_at,
                updated_at
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addHospital