const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");
const upload = require("../../middleware/multer.middleware");



router.get("/", galleryController.getAll);
router.get("/:id", galleryController.getById);
router.get("/for-update/:id", galleryController.getForUpdate);
router.post("/", upload.single('Image'),galleryController.create);
router.put("/:id",upload.single('Image'), galleryController.update);
router.delete("/:id", galleryController.delete);

module.exports = router;
