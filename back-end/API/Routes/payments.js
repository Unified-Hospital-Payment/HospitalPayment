const router = require("express").Router();

const {addPayment, getPayments}= require("../Controller/Payments");

router.post( "/add",addPayment);
router.get("/",getPayments);

module.exports = router;



