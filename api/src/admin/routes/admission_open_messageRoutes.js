const express = require("express");
const router = express.Router();
const admission_open_messageController = require("../controllers/admission_open_messageController");
const upload = require("../../middleware/multer.middleware");



router.get("/", admission_open_messageController.getAll);
router.get("/:id", admission_open_messageController.getById);
router.get("/for-update/:id", admission_open_messageController.getForUpdate);
router.post("/",upload.single('Image'), admission_open_messageController.create);
router.put("/:id",upload.single('Image'), admission_open_messageController.update);
router.delete("/:id", admission_open_messageController.delete);

module.exports = router;
