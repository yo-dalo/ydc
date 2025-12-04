const { Sequelize } = require("sequelize");
const env = require('./env')

const sequelize = new Sequelize("ydc", "yo-dalo", "yo", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
