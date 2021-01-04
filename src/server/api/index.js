'use strict';
const express = require('express');
const router = express.Router();

router.use('/pi', require('./pi'));

module.exports = router;