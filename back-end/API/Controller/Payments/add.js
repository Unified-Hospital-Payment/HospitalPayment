const prisma = require("../../DB/Prisma");

async function addPayment(req, res, next){
    try {
        const {
            user_id,
            hospital_id,
            service_id,
            amount,
            payment_status,
            transaction_id
        } = req.body


        const doc = await prisma.payments.create({
            data: {
            user_id,
            hospital_id,
            service_id,
            amount,
            payment_status,
            transaction_id
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addPayment