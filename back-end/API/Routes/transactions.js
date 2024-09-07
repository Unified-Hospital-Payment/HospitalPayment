const router = require("express").Router();

const {addTransaction, getTransactions}= require("../Controller/Transactions");

router.post( "/add",addTransaction);
router.get("/",getTransactions);

module.exports = router;



