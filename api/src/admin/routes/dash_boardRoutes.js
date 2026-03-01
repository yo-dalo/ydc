const express = require("express");
const router = express.Router();
const dash_boardController = require("../controllers/dash_boardController");


router.get("/", dash_boardController.getAll);
// router.get("/:id", dash_boardController.getById);
// router.get("/for-update/:id", dash_boardController.getForUpdate);

// router.delete("/:id", dash_boardController.delete);

module.exports = router;
