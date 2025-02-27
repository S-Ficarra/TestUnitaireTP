const express = require('express');
const router = express.Router();
const vhsController = require('../controllers/vhsController');

// Define vhs routes
router.post('/', vhsController.createVhs);


module.exports = router;