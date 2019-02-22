const path = require('path');

const express = require('express');

const router = express.Router();

const adminDashBoard = require('../controllers/admin');

router.use('/index', adminDashBoard.postLogin);
module.exports = router;


