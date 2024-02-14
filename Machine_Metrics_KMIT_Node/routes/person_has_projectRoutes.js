const express = require('express');
const router = express.Router();
const personProjects = require('../controllers/person_has_projectController')

// Ruta para obtener todos los usuarios
router.get('/all', personProjects.getProjects);

module.exports = router;
