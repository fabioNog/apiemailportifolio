const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const BeearStyleModel = require('../app/models/BeearStyleModel');

const connection = new Sequelize(dbConfig);

BeearStyleModel.init(connection);


module.exports = connection;