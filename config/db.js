const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // === MODE PRODUCTION (Netlify + Neon) ===
  // DATABASE_URL otomatis dari Neon → Postgres + SSL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // penting untuk Neon
      }
    },
    logging: false
  });
} else {
  // === MODE LOKAL (MySQL) ===
  sequelize = new Sequelize(
    process.env.DB_NAME || 'db_nusantap',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '',
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      logging: false
    }
  );
}

module.exports = sequelize;