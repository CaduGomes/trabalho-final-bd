import { Connection } from "mysql2/promise";
import stateSeed from "./stateSeed";

export default async (db: Connection) => {
  await stateSeed(db);

  await db.query(
    `INSERT INTO ufscarona.city (id_city, id_state, name)
     VALUES ('3b24916c-63bd-4fb3-a0c7-792a5f2a710c', '2a3e302d-b316-4170-aabf-54e557c4f42e', 'Araranguá');`
  );
};
