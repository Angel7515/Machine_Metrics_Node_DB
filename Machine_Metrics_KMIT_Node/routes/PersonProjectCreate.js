// personProjectRoutes.js
const express = require('express');
const router = express.Router();
const PersonProjectController = require('../controllers/PersonProjectCreate');

// Ruta para crear un nuevo registro en person_has_project
router.post('/person_has_project', PersonProjectController.createPersonProject);

module.exports = router;
