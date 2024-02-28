// routes/personHasProject.js

const express = require('express');
const router = express.Router();
const personProjectController = require('../controllers/Deleteperson_has_projectController');

// Ruta para eliminar un registro de person_has_project
router.delete('/:personIdActive', personProjectController.deletePersonProject);

module.exports = router;
