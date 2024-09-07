const router = require("express").Router();

const {addReceipt, getReceipts}= require("../Controller/Receipts");

router.post( "/add",addReceipt);
router.get("/",getReceipts);

module.exports = router;



