import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

export const DB_CONFIG = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "socialhub",
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
};
