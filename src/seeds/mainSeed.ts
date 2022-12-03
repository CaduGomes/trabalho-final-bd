import { Connection } from "mysql2/promise";
import adressSeed from "./adressSeed";

export default async (db: Connection) => {
  await adressSeed(db);
};
