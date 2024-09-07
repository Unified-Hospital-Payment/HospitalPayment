const router = require("express").Router();

const {addHospitalAdmins, getHospialAdmins}= require("../Controller/HospitalAdmins");

router.post( "/add",addHospitalAdmins);
router.get("/",getHospialAdmins);

module.exports = router;
