const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

//Ruta para obtener las personas
router.get('/all',personController.getPerson);

module.exports = router;