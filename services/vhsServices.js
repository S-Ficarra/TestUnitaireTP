const Vhs = require('../models/vhsModel');

exports.createVhs = async (title, director) => {
    const newVhs = await Vhs.create({ title: title, director: director });
    return newVhs;
}
