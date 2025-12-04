require('dotenv').config();
module.exports = {
  userJwtSecret: process.env.USER_JWT_SECRET,
  adminJwtSecret: process.env.ADMIN_JWT_SECRET,
  adminJwtExpiresIn: process.env.ADMIN_JWT_EXPIRES_IN,
  userJwtExpiresIn: process.env.USER_JWT_EXPIRES_IN,
  userCookieName: process.env.USER_COOKIE_NAME,
  adminCookieName: process.env.ADMIN_COOKIE_NAME,
  isProduction: process.env.IS_PRODUCTION,

  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  port: process.env.PORT,
 
};






