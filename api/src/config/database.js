const { Sequelize } = require("sequelize");
const env = require('./env')

const sequelize = new Sequelize("ydc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
