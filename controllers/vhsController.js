const vhsService = require('../services/vhsServices');


exports.getAllVhs = async (req, res) => {
    try {
        const allVhs = await vhsService.getAllVhs();
        res.status(200).json(allVhs)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getVhsByName = async (req, res) => {

    try {
        const vhsName = req.params.name;
        const vhs = await vhsService.getVhsByName(vhsName);

        if (!vhs) {
            return res.status(404).json({ message: 'VHS not found' });
        }
        res.status(200).json(vhs); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


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