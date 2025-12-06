const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../../middleware/multer.middleware");






router.get("/", blogController.getAll);
router.get("/:id", blogController.getById);
router.get("/for-update/:id", blogController.getForUpdate);
router.post("/",upload.single('Image'), blogController.create);
router.put("/:id",upload.single('Image'), blogController.update);
router.delete("/:id", blogController.delete);

module.exports = router;
