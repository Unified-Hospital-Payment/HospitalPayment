const prisma = require("../../DB/Prisma");

async function addTransaction(req, res, next){
    try {
        const {
            payment_id,
            blockchain_txn_id,
            block_number,
            status 
        } = req.body


        const doc = await prisma.transactions.create({
            data: {
            payment_id,
            blockchain_txn_id,
            block_number,
            status 
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addTransaction