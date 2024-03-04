// routes/kpisRoutes.js
const express = require('express');
const router = express.Router();
const kpisController = require('../controllers/overviewKPI');

router.get('/projects/:projectId', kpisController.getKpisByProject);

module.exports = router;
