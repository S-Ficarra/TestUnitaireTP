const Vhs = require('../models/vhsModel');


exports.getAllVhs = async () => {
    return await Vhs.findAll();
}

exports.getVhsByName = async (title) => {
    return await Vhs.findOne({where: {title : title}});
}

exports.createVhs = async (title, director) => {
    const newVhs = await Vhs.create({ title: title, director: director });
    return newVhs;
}

exports.updateVhs = async (id, title, director) => {
    const vhsToUpdate = await Vhs.findByPk(id);

    vhsToUpdate.director = director;
    vhsToUpdate.title = title;

    const vhsUpdated = vhsToUpdate.save();

    return vhsUpdated;

}
