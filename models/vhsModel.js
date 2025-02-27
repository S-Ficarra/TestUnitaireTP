const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

// Define the Vhs model
const Vhs = sequelize.define('Vhs', {
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
    director: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Vhs;
