const express = require("express");
const { register, loginUser } = require("../UserController");
const { middleEmail } = require("../../Middlewares/middlewares");
const router = express.Router();

router.post("/register", middleEmail, register);
router.post("/loginUser", loginUser);

module.exports = router;
