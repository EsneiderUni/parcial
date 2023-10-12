require('dotenv').config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  DB_PORT: process.env.DB_PORT, 
  PORT: process.env.PORT
};
