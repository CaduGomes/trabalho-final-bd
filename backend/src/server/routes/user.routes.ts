import { Express } from "express";
import { Connection } from "mysql2/promise";
import { getUserHistory } from "../../database/queries/user";

export default (db: Connection, app: Express) => {
  app.get("/user/:userId/travels", async (req, res) => {
    const { userId } = req.params;
    const { userType } = req.query;

    console.log(userType);

    if (typeof userType !== "string" || !userType) {
      return res.status(400);
    }

    const result = await getUserHistory(db, { userId, userType });

    res.json(result || []);
  });
};
