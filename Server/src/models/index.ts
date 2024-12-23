import { Sequelize } from "sequelize";
import { DB_CONFIG } from "../config/config";
import UserModel from "./User";

// Initialize Sequelize
const sequelize = new Sequelize(
  DB_CONFIG.database,
  DB_CONFIG.username,
  DB_CONFIG.password,
  {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect as any,
    logging: false,
  }
);

// Dynamically import all models
const User = UserModel(sequelize);

// Export the models in a central place (db object)
const db = {
  sequelize,
  Sequelize,
  User,
};

export default db;
