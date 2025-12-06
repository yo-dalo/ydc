const express = require("express");
const router = express.Router();
const toperController = require("../controllers/toperController");
const upload = require("../../middleware/multer.middleware");



router.get("/", toperController.getAll);
router.get("/:id", toperController.getById);
router.get("/for-update/:id", toperController.getForUpdate);
router.post("/",upload.single('Image'), toperController.create);
router.put("/:id",upload.single('Image'), toperController.update);
router.delete("/:id", toperController.delete);

module.exports = router;
