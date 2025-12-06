const express = require("express");
const router = express.Router();
const posterController = require("../controllers/posterController");
const upload = require("../../middleware/multer.middleware");



router.get("/", posterController.getAll);
router.get("/:id", posterController.getById);
router.get("/for-update/:id", posterController.getForUpdate);
router.post("/",upload.single('Image'), posterController.create);
router.put("/:id",upload.single('Image'), posterController.update);
router.delete("/:id", posterController.delete);

module.exports = router;
