const express = require('express');
const router = express.Router();
const kpisHasPersonController = require('../controllers/kpisHasPersonController');

// Ruta para obtener todos los registros de kpis_has_person
router.get('/all', kpisHasPersonController.getKpisHasPerson);

module.exports = router;
