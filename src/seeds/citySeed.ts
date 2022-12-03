import { Connection } from "mysql2/promise";
import stateSeed from "./stateSeed";

export default async (db: Connection) => {
  await stateSeed(db);

  // [id_city, id_state, name]
  const cities = [
    ["1", "1", "Araranguá"],
    ["2", "1", "Nova Guarita"],
    ["3", "1", "Sombrio"],
    ["4", "1", "Santa Roda do Sul"],
    ["5", "2", "Torres"],
    ["6", "2", "Terra de Areia"],
    ["7", "2", "Capão da Canoa"],
    ["8", "2", "Xangri-Lá"],
    ["9", "2", "Três Cachoeiras"],
    ["10", "2", "Osório"],
  ];

  for (const data of cities) {
    await db.execute(
      `INSERT INTO ufscarona.city (id_city, id_state, name) VALUES (?, ?, ?);`,
      data
    );
  }
};
