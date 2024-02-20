const express = require('express');
const router = express.Router();
const newprojectController = require('../controllers/NewProjectController');

// POST /project
router.post('/create', newprojectController.createProject);

module.exports = router;
