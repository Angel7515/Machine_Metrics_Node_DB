const express = require('express');
const router = express.Router();
const personHasProjectController = require('../controllers/personHasProjectController');

// Ruta para crear un nuevo registro en person_has_project
router.post('/personhasproject', personHasProjectController.createPersonHasProject);

module.exports = router;
