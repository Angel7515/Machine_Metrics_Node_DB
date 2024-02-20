// personRoutes.js
const express = require('express');
const router = express.Router();
const { createNewUser } = require('../controllers/crearPersonController');

router.post('/create', createNewUser);

module.exports = router;
