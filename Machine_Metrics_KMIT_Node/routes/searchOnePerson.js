const express = require('express');
const router = express.Router();
const personController = require('../controllers/searchOnePerson');

// Ruta para obtener el nombre de una persona por su idactive
router.get('/:idactive', personController.getPersonByName);

module.exports = router;
