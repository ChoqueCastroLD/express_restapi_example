const router = require('express').Router();

// Users routes
router.use('/users', require('./usersRoutes'));

// Images routes
// app.use('/images', require('./imagesRoutes'));


module.exports = router;