const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

db.users = require('./user.model.js')(sequelize, Sequelize);

module.exports = db;