import dbConfig from "@/configs/database";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

export default sequelize;
