// routes/kpiRoutes.js
const express = require('express');
const router = express.Router();
const kpiController = require('../controllers/UpdateKPI');

// Ruta para actualizar un KPI por su idkpis
router.put('/:idkpis', kpiController.updateKpi);

module.exports = router;
