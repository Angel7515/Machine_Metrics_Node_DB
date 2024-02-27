const express = require('express');
const router = express.Router();
const personController = require('../controllers/crearPersonController');

// Ruta para crear una nueva entrada de performance
router.post('/create', personController.createNewUser);

module.exports = router;