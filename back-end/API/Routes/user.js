const router = require("express").Router();

const {addUser, getUsers}= require("../Controller/User");

router.post( "/add",addUser);
router.get("/",getUsers);

module.exports = router;



