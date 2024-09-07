const prisma = require("../../DB/Prisma");

async function addPatientConsultation(req, res, next){
    try {
        const {
            patient_id,
            doctor_id,
            reason ,
            status
        } = req.body


        const doc = await prisma.patient_doctor_assignments.create({
            data: {
            patient_id,
            doctor_id,
            reason ,
            status
            }
        });
        return res.status(201).json(doc); 

    } catch (error) {
        return next(error);

    }
}

module.exports = addPatientConsultation