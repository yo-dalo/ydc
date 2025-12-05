const express = require("express");
const router = express.Router();
const school_infoController = require("../controllers/school_infoController");

router.get("/", school_infoController.getAll);
router.get("/:id", school_infoController.getById);
router.get("/for-update/:id", school_infoController.getForUpdate);
router.post("/", school_infoController.create);
router.put("/:id", school_infoController.update);
router.delete("/:id", school_infoController.delete);

module.exports = router;
