import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
