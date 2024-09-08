const prisma = require("../../DB/Prisma");

async function addServices(req, res, next){
    try {
        const {
            hospital_id ,
            name,
            description,
            price,
            category_id

        } = req.body


        const doc = await prisma.services.create({
            data: {
            hospital_id ,
            name,
            description,
            price,
            category_id
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addServices