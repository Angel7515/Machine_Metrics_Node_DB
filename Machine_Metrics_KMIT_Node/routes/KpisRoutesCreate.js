const express = require('express');
const router = express.Router();
const kpisController = require('../controllers/KpiControllerCreate');

// Ruta para crear un nuevo KPI
router.post('/kpis', kpisController.createKpi);

module.exports = router;
