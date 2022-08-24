import express, { Application } from "express";
import personRoutes from "../routes/person";
import cors from "cors";
import db from "../config/db/connection";

class Server {
  private app: Application;
  private port: string;
  private paths = {
    persons: "/api/person",
    movies: "/api/movie",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  async dbConnection() {
    try {
      await db.authenticate();
      console.log("La conexion se realizo con exito!");
    } catch (error: any) {
      throw new Error(error);
    }
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.paths.persons, personRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor lo estamos corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
