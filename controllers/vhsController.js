const vhsService = require('../services/vhsServices');


exports.createVhs = async (req, res) => {
    try {
        const { title, director } = req.body;
        if (!title || !director) {
            return res.status(400).json({ error: 'Title and director are required' });
        }
        const newVhs = await vhsService.createVhs( title, director );
        
        res.status(201).json(newVhs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}