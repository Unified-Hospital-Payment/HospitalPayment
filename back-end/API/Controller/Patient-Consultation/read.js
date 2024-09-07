const prisma = require("../../DB/Prisma");

async function getPatientConsultation(req, res, next) {
  try {
    const patientConsultation = await prisma.patient_doctor_assignments.findMany();
    return res.status(200).json(patientConsultation);
  } catch (error) {
    return next(error);
  }
}
module.exports = getPatientConsultation;
