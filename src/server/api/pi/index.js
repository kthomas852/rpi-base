const express = require('express');
const controller = require('./pi.controller');
const router = express.Router();

router.get('/', controller.status);

module.exports = router;