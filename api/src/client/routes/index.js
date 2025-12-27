const express = require('express');
const router = express.Router();

const posterRoutes = require('./posterRoutes');
const pagesRoutes = require('./pagesRoutes');

router.use('/poster', posterRoutes);

router.use('/pages', pagesRoutes);
module.exports = router;
