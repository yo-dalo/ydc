const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.get("/", galleryController.getAll);
router.get("/:id", galleryController.getById);
router.get("/for-update/:id", galleryController.getForUpdate);
router.post("/", galleryController.create);
router.put("/:id", galleryController.update);
router.delete("/:id", galleryController.delete);

module.exports = router;
