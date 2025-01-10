const express = require('express');
const router = express.Router();
const vinylController = require('../controllers/vinylController');

// Define user routes
router.get('/', vinylController.getAllVinyls);
router.get('/:id', vinylController.getVinylById);
router.post('/', vinylController.createVinyl);
router.put('/:id', vinylController.updateVinyl);
router.delete('/:id', vinylController.deleteVinyl);

module.exports = router;