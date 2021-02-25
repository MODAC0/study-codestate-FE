const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: process.env.DATABASE_SPRINT_HOST,
    username: process.env.DATABASE_SPRINT_USER,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: 'cmarket',
    dialect: 'mysql'
  },
  test: {
    host: process.env.DATABASE_SPRINT_HOST,
    username: process.env.DATABASE_SPRINT_USER,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: 'cmarket_test',
    dialect: 'mysql'
  }
};

module.exports = config;
