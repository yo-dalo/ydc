const express = require("express");
const router = express.Router();
const toperController = require("../controllers/toperController");

router.get("/", toperController.getAll);
router.get("/:id", toperController.getById);
router.get("/for-update/:id", toperController.getForUpdate);
router.post("/", toperController.create);
router.put("/:id", toperController.update);
router.delete("/:id", toperController.delete);

module.exports = router;
