const express = require("express");
const router = express.Router();
const branchController = require("../controllers/branchController");

router.get("/", branchController.getAll);
router.get("/:id", branchController.getById);
router.get("/for-update/:id", branchController.getForUpdate);
router.post("/", branchController.create);
router.put("/:id", branchController.update);
router.delete("/:id", branchController.delete);

module.exports = router;
