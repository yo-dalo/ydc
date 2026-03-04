const express = require("express");
const router = express.Router();
const posterController = require("../controllers/posterController");

router.get("/", posterController.getAll);
router.get("/:id", posterController.getById);
router.get("/for-update/:id", posterController.getForUpdate);
router.post("/", posterController.create);
router.put("/:id", posterController.update);
router.delete("/:id", posterController.delete);

module.exports = router;
