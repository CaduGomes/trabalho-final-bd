import { Connection } from "mysql2/promise";
import stateSeed from "./stateSeed";

export default async (db: Connection) => {
  await stateSeed(db);

  // [id_city, id_state, name]
  const cities = [
    ["1", "1", "Araranguá"],
    ["2", "1", "Sombrio"],
    ["3", "1", "Santa Roda do Sul"],
    ["4", "2", "Torres"],
    ["5", "2", "Terra de Areia"],
    ["6", "2", "Capão da Canoa"],
    ["7", "2", "Xangri-Lá"],
    ["8", "2", "Três Cachoeiras"],
    ["9", "2", "Osório"],
    ["10", "1", "Trindade"],
    ["11", "1", "Joinville"],
    ["12", "1", "Blumenau"],
    ["13", "1", "Curitibanos"],
  ];

  for (const data of cities) {
    await db.execute(
      `INSERT INTO UFSCarona.City (id_city, id_state, name) VALUES (?, ?, ?);`,
      data
    );
  }
};
