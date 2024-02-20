const express = require('express');
const router = express.Router();
const personController = require('../controllers/checkPersonLoginController');

router.post('/checkUserAccess', personController.checkUserAccess);

module.exports = router;
