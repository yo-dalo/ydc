const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

router.get("/", pagesController.getAll);
router.get("/:id", pagesController.getById);
router.get("/for-update/:id", pagesController.getForUpdate);
router.post("/", pagesController.create);
router.put("/:id", pagesController.update);
router.delete("/:id", pagesController.delete);

module.exports = router;
