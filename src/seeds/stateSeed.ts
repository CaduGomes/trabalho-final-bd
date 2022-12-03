import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  await db.query(
    `INSERT INTO ufscarona.state (id_state, name) VALUES ('2a3e302d-b316-4170-aabf-54e557c4f42e', 'Santa Catarina');`
  );
};
