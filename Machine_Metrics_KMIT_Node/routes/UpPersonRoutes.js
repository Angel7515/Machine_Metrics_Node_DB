// personRoutes.js
const express = require('express');
const router = express.Router();
const { updateRole } = require('../controllers/UpdatePersonController');

router.put('/updateRole', updateRole);

module.exports = router;
