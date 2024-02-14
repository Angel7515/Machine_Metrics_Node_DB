const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController')

//Ruta oara obtener todos los registros de performance
router.get('/all',performanceController.getPerformance);

module.exports = router;