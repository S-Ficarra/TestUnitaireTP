const Vhs = require('../models/vhsModel');


exports.createVhs = (title, director) => {
    const newVhs = Vhs.build({ title: title, director: director });
    return newVhs;
}
