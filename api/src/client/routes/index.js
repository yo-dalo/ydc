const express = require('express');
const router = express.Router();
const posterRoutes = require('./posterRoutes');
const pagesRoutes = require('./pagesRoutes');
const messagesRoutes = require('./messagesRoutes');
const admissionRoutes = require('./admissionRoutes');
const notificationRoutes = require('./notificationRoutes');
const toperRoutes = require('./toperRoutes');


router.use('/poster', posterRoutes);

router.use('/pages', pagesRoutes);
router.use('/messages', messagesRoutes);
router.use('/notification', notificationRoutes);
router.use('/admission', admissionRoutes);
router.use('/toper', toperRoutes);
module.exports = router;
