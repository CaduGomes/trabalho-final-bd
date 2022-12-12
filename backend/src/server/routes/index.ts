import { Connection } from "mysql2/promise";
import { Express } from "express";
import authRoutes from "./auth.routes";
import travelRoutes from "./travel.routes";
import userRoutes from "./user.routes";

export default (db: Connection, app: Express) => {
  authRoutes(db, app);
  travelRoutes(db, app);
  userRoutes(db, app);
};
