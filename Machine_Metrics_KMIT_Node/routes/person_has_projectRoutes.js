const express = require('express');
const router = express.Router();
const personProjectsController = require('../controllers/person_has_projectController');

// Ruta para obtener todos los usuarios
router.get('/all', personProjectsController.getPersonProjects);

module.exports = router;
