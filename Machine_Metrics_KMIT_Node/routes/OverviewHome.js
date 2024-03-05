const express = require('express');
const router = express.Router();
const projectController = require('../controllers/OverviewHome');

router.get('/summary', projectController.getSummary);

module.exports = router;
