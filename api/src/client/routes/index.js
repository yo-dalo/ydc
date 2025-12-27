const express = require('express');
const router = express.Router();

const posterRoutes = require('./posterRoutes');

router.use('/poster', posterRoutes);

module.exports = router;
