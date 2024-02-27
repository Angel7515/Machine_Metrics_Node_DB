const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/PerformanceController');

// Ruta para obtener todas las entradas de rendimiento
router.get('/', performanceController.getAllPerformance);

module.exports = router;
