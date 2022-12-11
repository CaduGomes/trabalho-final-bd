import { Connection } from "mysql2/promise";
import { Express } from "express";
import authRoutes from "./auth.routes";

export default (db: Connection, app: Express) => {
  authRoutes(db, app);
};
