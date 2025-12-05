const express = require("express");
const router = express.Router();
const gallery_categoryController = require("../controllers/gallery_categoryController");

router.get("/", gallery_categoryController.getAll);
router.get("/:id", gallery_categoryController.getById);
router.get("/for-update/:id", gallery_categoryController.getForUpdate);
router.post("/", gallery_categoryController.create);
router.put("/:id", gallery_categoryController.update);
router.delete("/:id", gallery_categoryController.delete);

module.exports = router;
