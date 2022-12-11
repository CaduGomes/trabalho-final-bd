import { Express } from "express";
import { Connection } from "mysql2/promise";
import { getTravels, getIDPOI, getTravelUsers } from "../../database/queries";

export default (db: Connection, app: Express) => {
  app.get("/poi/city", async (req, res) => {
    const city_name = req.query.name;

    if (typeof city_name !== "string" || !city_name) {
      return res.send(400);
    }

    const result = await getIDPOI(db, city_name);

    res.json(result || []);
  });

  app.get("/travels/search", async (req, res) => {
    const { date, origin, destination } = req.query;

    if (
      typeof date !== "string" ||
      !date ||
      typeof origin !== "string" ||
      !origin ||
      typeof destination !== "string" ||
      !destination
    ) {
      return res.send(400);
    }

    const result = await getTravels(db, { date, origin, destination });

    res.json(result || []);
  });

  app.get("/travels/:id", async (req, res) => {
    const { id } = req.params;

    const result = await getTravelUsers(db, id);

    res.json(result || []);
  });
};
