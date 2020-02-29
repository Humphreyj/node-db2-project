const express = require('express');

const router = express.Router();

const carsRouter = require('../routers/carsRouter');

router.use('/cars', carsRouter);
module.exports = router;