const { Sequelize, db } = require('../db/connection');
const { DataTypes } = require('sequelize');

const Musician = db.define('Musician', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instrument: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Musician;