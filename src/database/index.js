const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const EmailStyleModel = require('../app/models/EmailStyleModel');

const connection = new Sequelize(dbConfig);

EmailStyleModel.init(connection);


module.exports = connection;