const express = require("express");
const router = express.Router();
const useful_linkController = require("../controllers/useful_linkController");

router.get("/", useful_linkController.getAll);
router.get("/:id", useful_linkController.getById);
router.get("/for-update/:id", useful_linkController.getForUpdate);
router.post("/", useful_linkController.create);
router.put("/:id", useful_linkController.update);
router.delete("/:id", useful_linkController.delete);

module.exports = router;
