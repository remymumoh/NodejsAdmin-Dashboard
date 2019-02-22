const path = require('path');

const express = require('express');

const router = express.Router();

const adminDashBoard = require('../controllers/admin');

router.use('/index', adminDashBoard.postLogin);
router.use('/charts', adminDashBoard.postCharts);
router.use('/widgets', adminDashBoard.postWidgets);

module.exports = router;


