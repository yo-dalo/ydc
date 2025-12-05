const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.get("/", authController.is_logined);

router.post("/register", authController.register);
module.exports = router;
