const express = require("express");
const router = express.Router();
const achievementsController = require("../controllers/achievementsController");
const upload = require("../../middleware/multer.middleware");




router.get("/", achievementsController.getAll);
router.get("/:id", achievementsController.getById);
router.get("/for-update/:id", achievementsController.getForUpdate);
router.post("/",upload.single('Image'), achievementsController.create);
router.put("/:id", upload.single('Image'),achievementsController.update);
router.delete("/:id", achievementsController.delete);

module.exports = router;
