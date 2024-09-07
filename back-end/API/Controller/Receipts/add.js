const prisma = require("../../DB/Prisma");

async function addReceipt(req, res, next){
    try {
        const {
            payment_id,
            receipt_number,
            amount_paid,
            amount,
            details
        } = req.body


        const doc = await prisma.payments.create({
            data: {
            payment_id,
            receipt_number,
            amount_paid,
            amount,
            details
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addReceipt