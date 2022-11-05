// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

// module.exports = sequelize;

const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'ecommerce_db',
  // User
  'root',
  // Password
  'password',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;