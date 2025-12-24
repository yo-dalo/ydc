const express = require("express");

const achievementsRoutes = require("../routes/achievementsRoutes");
const adminsRoutes = require("../routes/adminsRoutes");
const admissionRoutes = require("../routes/admissionRoutes");
const admission_open_messageRoutes = require("../routes/admission_open_messageRoutes");
const blogRoutes = require("../routes/blogRoutes");
const facilityRoutes = require("../routes/facilityRoutes");
const gallery_categoryRoutes = require("../routes/gallery_categoryRoutes");
const galleryRoutes = require("../routes/galleryRoutes");

const messagesRoutes = require("../routes/messagesRoutes");
const notificationRoutes = require("../routes/notificationRoutes");
const pages_categoryRoutes = require("../routes/pages_categoryRoutes");
const pagesRoutes = require("../routes/pagesRoutes");
const posterRoutes = require("../routes/posterRoutes");
const quick_linkRoutes = require("../routes/quick_linkRoutes");
const school_infoRoutes = require("../routes/school_infoRoutes");
const school_welcome_messageRoutes = require("../routes/school_welcome_messageRoutes");
const toper_categoryRoutes = require("../routes/toper_categoryRoutes");
const toperRoutes = require("../routes/toperRoutes");
const useful_linkRoutes = require("../routes/useful_linkRoutes");
const authRoutes = require("../routes/authRoutes");
const dash_boardRoutes = require("../routes/dash_boardRoutes");
const router = express.Router();

router.use("/achievements", achievementsRoutes);
router.use("/admins", adminsRoutes);
router.use("/admission", admissionRoutes);
router.use("/admission-open-message", admission_open_messageRoutes);
router.use("/blog", blogRoutes);
router.use("/facility", facilityRoutes);
router.use("/gallery-category", gallery_categoryRoutes);
router.use("/gallery", galleryRoutes);

router.use("/messages", messagesRoutes);
router.use("/notification", notificationRoutes);
router.use("/pages-category", pages_categoryRoutes);
router.use("/pages", pagesRoutes);
router.use("/poster", posterRoutes);
router.use("/quick-link", quick_linkRoutes);
router.use("/school-info", school_infoRoutes);
router.use("/school-welcome-message", school_welcome_messageRoutes);
router.use("/toper-category", toper_categoryRoutes);
router.use("/toper", toperRoutes);
router.use("/useful-link", useful_linkRoutes);
router.use('/auth', authRoutes);
router.use("/", dash_boardRoutes);
module.exports = router;
