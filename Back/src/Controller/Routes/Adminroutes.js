const express = require("express");
const { loginAdmin } = require("../AdminController");
const router = express.Router();

router.post("/loginAdmin", loginAdmin);

module.exports = router;
