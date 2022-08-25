import { Sequelize } from "sequelize";

/* const db = new Sequelize("node", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
}); */

const db = new Sequelize("mysql://root:root1234@localhost:3306/iMachinary");

export default db;
