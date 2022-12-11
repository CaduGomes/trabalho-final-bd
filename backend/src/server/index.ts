import { Connection } from "mysql2/promise";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

export const startServer = (db: Connection) => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.all("*", (req, res) => {
    res.sendStatus(404);
  });

  app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
  });
};
