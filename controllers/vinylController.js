const Vinyl = require('../models/vinylModel');

// Get all vinyls
exports.getAllVinyls = async (req, res) => {
    try {
        const vinyls = await Vinyl.findAll();
        res.json(vinyls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get vinyl by ID
exports.getVinylById = async (req, res) => {
    try {
        const vinyl = await Vinyl.findByPk(req.params.id);
        if (!vinyl) {
            return res.status(404).json({ error: 'Vinyl not found' });
        }
        res.json(vinyl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new vinyl
exports.createVinyl = async (req, res) => {
    try {
        const { title, band } = req.body;
        if (!title || !band) {
            return res.status(400).json({ error: 'Title and band are required' });
        }
        const newVinyl = await Vinyl.create({ title, band });
        res.status(201).json(newVinyl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update vinyl by ID
exports.updateVinyl = async (req, res) => {
    try {
        const { title, band } = req.body;
        const vinyl = await Vinyl.findByPk(req.params.id);

        if (!vinyl) {
            return res.status(404).json({ error: 'Vinyl not found' });
        }

        await vinyl.update({ title, band });
        res.json(vinyl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete vinyl by ID
exports.deleteVinyl = async (req, res) => {
    try {
        const vinyl = await Vinyl.findByPk(req.params.id);
        if (!vinyl) {
            return res.status(404).json({ error: 'Vinyl not found' });
        }

        await vinyl.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
