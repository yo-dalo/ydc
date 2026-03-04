const express = require('express');
const router = express.Router();
const posterRoutes = require('./posterRoutes');
const pagesRoutes = require('./pagesRoutes');
const messagesRoutes = require('./messagesRoutes');
const admissionRoutes = require('./admissionRoutes');
const notificationRoutes = require('./notificationRoutes');
const toperRoutes = require('./toperRoutes');
const checkBranch = require("../../middleware/subdomainMiddleware");




router.use('/poster',checkBranch, posterRoutes);

router.use('/pages',checkBranch, pagesRoutes);
router.use('/messages',checkBranch, messagesRoutes);
router.use('/notification',checkBranch, notificationRoutes);
router.use('/admission',checkBranch, admissionRoutes);
router.use('/toper',checkBranch, toperRoutes);
module.exports = router;
