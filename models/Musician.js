const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Musician = sequelize.define('Musician', {
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