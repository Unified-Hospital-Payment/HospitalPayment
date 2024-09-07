const prisma = require("../../DB/Prisma");
const bcrypt = require('bcrypt');
const saltRounds = 10; 

async function addUser(req, res, next){
    try {
        const {
            name,
            email,
            phone_number,
            role, 
            password_hash
        } = req.body

        const hashedPassword = await bcrypt.hash(password, saltRounds);


        const doc = await prisma.users.create({
            data: {
                name:name,
                email:email,
                phone_number:phone_number,
                role:role, 
                password:hashedPassword 
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports =  addUser