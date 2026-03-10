const express = require("express");
const router = express.Router();
const quick_linkController = require("../controllers/quick_linkController");

router.get("/", quick_linkController.getAll);
router.get("/:id", quick_linkController.getById);
router.get("/for-update/:id", quick_linkController.getForUpdate);
router.post("/", quick_linkController.create);
router.put("/:id", quick_linkController.update);
router.delete("/:id", quick_linkController.delete);

module.exports = router;
