const express = require("express");
const router = express.Router();
const facilityController = require("../controllers/facilityController");
const upload = require("../../middleware/multer.middleware");



router.get("/", facilityController.getAll);
router.get("/:id", facilityController.getById);
router.get("/for-update/:id", facilityController.getForUpdate);
router.post("/",upload.single('Image'), facilityController.create);
router.put("/:id",upload.single('Image'), facilityController.update);
router.delete("/:id", facilityController.delete);

module.exports = router;
