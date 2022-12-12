import { Express } from "express";
import { Connection } from "mysql2/promise";
import { loginUser } from "../../database/queries/auth";

export default (db: Connection, app: Express) => {
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      return res.status(400);
    }

    const result = await loginUser(db, req.body);

    if (!result || !result[0]) {
      return res.sendStatus(404);
    }

    res.json(result[0]);
  });
};
