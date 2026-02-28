// const { Sequelize } = require("sequelize");
const env = require("./env");

// const sequelize = new Sequelize(env.dbName, env.dbUser, env.dbPass, {
//   host: env.dbHost,
//   port: env.port,
//   dialect: "mysql",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   },
//   logging: false
// });

// module.exports = sequelize;


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(env.dbName, env.dbUser, env.dbPass, {
  host: env.dbHost,
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;