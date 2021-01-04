const express = require('express');
const controller = require('./pi.controller');
const router = express.Router();

router.get('/', controller.status);
router.put('/red', controller.activate(22));
router.put('/green', controller.activate(27));
router.put('/blue', controller.activate(17));
router.delete('/red', controller.deactivate(22));
router.delete('/green', controller.deactivate(27));
router.delete('/blue', controller.deactivate(17));

module.exports = router;