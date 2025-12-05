const express = require("express");
const router = express.Router();
const adminsController = require("../controllers/adminsController");

router.get("/", adminsController.getAll);
router.get("/:id", adminsController.getById);
router.get("/for-update/:id", adminsController.getForUpdate);
router.post("/", adminsController.create);
router.put("/:id", adminsController.update);
router.delete("/:id", adminsController.delete);

module.exports = router;
