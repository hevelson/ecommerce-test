import "dotenv/config";

export default {
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  dialectOptions: {
    bigNumberStrings: true,
  },
  define: {
    underscored: true,
  },
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
