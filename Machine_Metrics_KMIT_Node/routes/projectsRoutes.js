const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController')

// Ruta para obtener todos los usuarios
router.get('/all', projectsController.getProjects);

module.exports = router;
