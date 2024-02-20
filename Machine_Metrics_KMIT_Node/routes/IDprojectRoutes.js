const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/IDprojectController');

// Ruta para obtener un proyecto por su ID
router.get('/:id', projectsController.getProjectById);

module.exports = router;