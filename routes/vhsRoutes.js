const express = require('express');
const router = express.Router();
const vhsController = require('../controllers/vhsController');

// Define vhs routes
router.get('/', vhsController.getAllVhs);
router.get('/:name', vhsController.getVhsByName)
router.post('/', vhsController.createVhs);
router.put('/:id', vhsController.updateVhs);
router.delete('/:id', vhsController.deleteVhs);



module.exports = router;