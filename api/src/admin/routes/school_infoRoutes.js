const express = require("express");
const router = express.Router();
const school_infoController = require("../controllers/school_infoController");
const upload = require("../../middleware/multer.middleware");

router.get("/", school_infoController.getAll);
router.get("/:id", school_infoController.getById);
router.get("/for-update/:id", school_infoController.getForUpdate);
router.post(
    "/",
    upload.fields([
        { name: "Logo_Url", maxCount: 1 },
        { name: "Favicon_Url", maxCount: 1 }
    ]),
    school_infoController.create
);
router.put("/:id", upload.fields([
    { name: "Logo_Url", maxCount: 1 },
    { name: "Favicon_Url", maxCount: 1 }
]), school_infoController.update);
router.delete("/:id", school_infoController.delete);

module.exports = router;
