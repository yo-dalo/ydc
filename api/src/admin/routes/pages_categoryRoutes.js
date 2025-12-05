const express = require("express");
const router = express.Router();
const pages_categoryController = require("../controllers/pages_categoryController");

router.get("/", pages_categoryController.getAll);
router.get("/:id", pages_categoryController.getById);
router.get("/for-update/:id", pages_categoryController.getForUpdate);
router.post("/", pages_categoryController.create);
router.put("/:id", pages_categoryController.update);
router.delete("/:id", pages_categoryController.delete);

module.exports = router;
