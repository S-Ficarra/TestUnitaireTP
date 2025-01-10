const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

// Define the Vinyl model
const Vinyl = sequelize.define('Vinyl', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    band: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Vinyl;
