const express = require('express');

const router = express.Router();
const pagesRoutes = require('./routes/pagesRoutes');
const blogRoutes = require('./routes/blogRoutes');
const achievementsRoutes = require('./routes/achievementsRoutes');


router.use('/pages', pagesRoutes);
router.use('/blog', blogRoutes);
router.use('/achievements', achievementsRoutes);

module.exports = router;
