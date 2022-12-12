import { Express } from "express";
import { Connection } from "mysql2/promise";
import { getUserHistory } from "../../database/queries/user";

export default (db: Connection, app: Express) => {
  app.get("/user/:userId/travels", async (req, res) => {
    const { userId } = req.params;


    const result = await getUserHistory(db, { userId });

    res.json(result || []);
  });
};
