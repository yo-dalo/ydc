const express = require("express");
const router = express.Router();
const toperController = require("../controllers/toperController");

router.get("/", toperController.getAll);
router.get("/:id", toperController.getById);

module.exports = router;
