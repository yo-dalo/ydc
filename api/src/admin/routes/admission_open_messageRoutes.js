const express = require("express");
const router = express.Router();
const admission_open_messageController = require("../controllers/admission_open_messageController");

router.get("/", admission_open_messageController.getAll);
router.get("/:id", admission_open_messageController.getById);
router.get("/for-update/:id", admission_open_messageController.getForUpdate);
router.post("/", admission_open_messageController.create);
router.put("/:id", admission_open_messageController.update);
router.delete("/:id", admission_open_messageController.delete);

module.exports = router;
