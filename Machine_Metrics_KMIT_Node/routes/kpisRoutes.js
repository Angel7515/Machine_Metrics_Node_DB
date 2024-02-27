// routes/kpiRoutes.js
const express = require('express');
const router = express.Router();
const kpiController = require('../controllers/kpisController');

// Ruta para obtener todos los registros de KPIs
router.get('/', kpiController.getAllKPIs);

module.exports = router;
