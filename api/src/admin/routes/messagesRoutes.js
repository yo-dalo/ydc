const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getById);
router.get("/for-update/:id", messagesController.getForUpdate);
router.post("/", messagesController.create);
router.put("/:id", messagesController.update);
router.delete("/:id", messagesController.delete);

module.exports = router;
