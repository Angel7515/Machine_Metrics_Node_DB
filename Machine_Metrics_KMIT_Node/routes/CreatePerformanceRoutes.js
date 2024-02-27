const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/CreatePerformanceController');

// Ruta para crear una nueva entrada de performance
router.post('/performance', performanceController.createPerformance);

module.exports = router;
