import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_state, name]
  const states = [
    ["1", "Santa Catarina"],
    ["2", "Rio Grande do Sul"],
  ];

  for (const data of states) {
    await db.execute(
      `INSERT INTO ufscarona.state (id_state, name) VALUES (?, ?);`,
      data
    );
  }
};
