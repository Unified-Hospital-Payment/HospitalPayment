const router = require('express').Router()

const Login = require("../Controller/userLogIn")

router.post('/', Login);

module.exports=router;
