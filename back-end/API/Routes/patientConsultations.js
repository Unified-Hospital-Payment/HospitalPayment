const router = require("express").Router();

const {addPatientConsultation, getPatientConsultation} = require("../Controller/Patient-Consultation");

router.post( "/add", addPatientConsultation);
router.get("/", getPatientConsultation);

module.exports = router;



