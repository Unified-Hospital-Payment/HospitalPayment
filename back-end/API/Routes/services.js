const router = require("express").Router();

const {addServices, getServices}= require("../Controller/Services");

router.post( "/add",addServices);
router.get("/",getServices);

module.exports = router;



