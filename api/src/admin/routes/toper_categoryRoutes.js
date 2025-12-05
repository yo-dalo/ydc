const express = require("express");
const router = express.Router();
const toper_categoryController = require("../controllers/toper_categoryController");

router.get("/", toper_categoryController.getAll);
router.get("/:id", toper_categoryController.getById);
router.get("/for-update/:id", toper_categoryController.getForUpdate);
router.post("/", toper_categoryController.create);
router.put("/:id", toper_categoryController.update);
router.delete("/:id", toper_categoryController.delete);

module.exports = router;
