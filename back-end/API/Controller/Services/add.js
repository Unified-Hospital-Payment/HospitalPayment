const prisma = require("../../DB/Prisma");

async function addServices(req, res, next) {
    try {
        const {
            hospital_id,
            name,
            description,
            price,
            doctor_id  // Include this field in the request body
        } = req.body;

        // Ensure all required fields are provided
        if (!doctor_id) {
            return res.status(400).json({ error: "Doctor ID is required" });
        }

        const doc = await prisma.services.create({
            data: {
                hospital_id,
                name,
                description,
                price: parseFloat(price), // Ensure price is a number
                doctor_id, // Add this to satisfy the required field
            }
        });

        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);
    }
}

module.exports = addServices;
