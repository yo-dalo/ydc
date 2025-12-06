const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");
const upload = require("../../middleware/multer.middleware");



router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getById);
router.get("/for-update/:id", messagesController.getForUpdate);
router.post("/", upload.single('Image'),messagesController.create);
router.put("/:id",upload.single('Image'), messagesController.update);
router.delete("/:id", messagesController.delete);

module.exports = router;
