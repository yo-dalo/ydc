const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { adminAuth } = require("../../middleware/authMiddleware");


router.post("/login", authController.login);
router.get("/", adminAuth, authController.is_logined);

router.post("/register", authController.register);
router.get("/logout", authController.logout);
module.exports = router;
