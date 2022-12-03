import { Connection } from "mysql2/promise";
import addressSeed from "./addressSeed";

export default async (db: Connection) => {
  await addressSeed(db);
};
