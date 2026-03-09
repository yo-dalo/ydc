const express = require("express");
const router = express.Router();
const school_welcome_messageController = require("../controllers/school_welcome_messageController");

router.get("/", school_welcome_messageController.getAll);
router.get("/:id", school_welcome_messageController.getById);
router.get("/for-update/:id", school_welcome_messageController.getForUpdate);
router.post("/", school_welcome_messageController.create);
router.put("/:id", school_welcome_messageController.update);
router.delete("/:id", school_welcome_messageController.delete);

module.exports = router;
