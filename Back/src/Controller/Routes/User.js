const express = require("express");
const { register, loginUser } = require("../UserController");
const { middleEmail } = require("../../Middlewares/middlewares");
const router = express.Router();

router.post("/register", middleEmail, register);
router.post("/login", middleEmail, loginUser);

module.exports = router;
