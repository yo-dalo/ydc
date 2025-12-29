const express = require("express");
const router = express.Router();
const admissionController = require("../controllers/admissionController");

router.get("/", admissionController.getAll);
router.get("/:id", admissionController.getById);
router.get("/for-update/:id", admissionController.getForUpdate);
router.post("/", admissionController.create);
router.put("/:id", admissionController.update);
router.delete("/:id", admissionController.delete);

module.exports = router;
