// projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/PutprojectControll');

router.put('/:idproject', projectController.updateProject);

module.exports = router;
