import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: process.env.DB_TYPE as Dialect,
  logging: false,
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
