const express = require("express");
const router = express.Router();
const achievementsController = require("../controllers/achievementsController");

router.get("/", achievementsController.getAll);
router.get("/:id", achievementsController.getById);
router.get("/for-update/:id", achievementsController.getForUpdate);
router.post("/", achievementsController.create);
router.put("/:id", achievementsController.update);
router.delete("/:id", achievementsController.delete);

module.exports = router;
