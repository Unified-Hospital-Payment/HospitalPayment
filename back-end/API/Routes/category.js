const router = require("express").Router();

const getCategory= require("../Controller/Category");

router.get("/", getCategory);

module.exports = router;
