const path = require('path');

const express = require('express');

const loginController = require('../controllers/admin');

const router = express.Router();

router.get('/', loginController.getLogin);
router.post('/admin/index', loginController.postLogin);

module.exports = router;