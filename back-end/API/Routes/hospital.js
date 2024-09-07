const router = require("express").Router();

const {addHospital, getHospital, deleteHospital}= require("../Controller/Hospital");

router.post( "/add", addHospital);
router.get("/", getHospital);
router.delete("/", deleteHospital);

module.exports = router;
