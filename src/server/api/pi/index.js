const express = require('express');
const controller = require('./pi.controller');
const router = express.Router();

router.get('/', controller.status);
router.put('/', controller.activate);
router.delete('/', controller.deactivate);

module.exports = router;