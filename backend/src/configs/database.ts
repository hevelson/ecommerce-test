import { env } from "@/configs/envConfig";
import { type Dialect, Options } from "sequelize";

const dialect: Dialect = "mysql";

export default {
  dialect: dialect,
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
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
