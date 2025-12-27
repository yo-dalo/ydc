const express = require('express');
const router = express.Router();

const posterRoutes = require('./posterRoutes');
const pagesRoutes = require('./pagesRoutes');
const messagesRoutes = require('./messagesRoutes');
const notificationRoutes = require('./notificationRoutes');

router.use('/poster', posterRoutes);

router.use('/pages', pagesRoutes);
router.use('/messages', messagesRoutes);
router.use('/notification', notificationRoutes);
module.exports = router;
