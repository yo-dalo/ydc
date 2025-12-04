const express = require('express');



const router = express.Router();
// const pagesRoutes = require('./pagesRoutes');
 const blogRoutes  = require('./blogRoutes');

const achievementsRoutes = require('./achievementsRoutes');








 router.use('/blog', blogRoutes);
router.use('/cc', achievementsRoutes);



module.exports = router;
