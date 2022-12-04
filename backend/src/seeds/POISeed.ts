import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_poi, id_address, name]
  const pois = [
    ["1", "1", "Embarque/Desembarque Araranguá"],
    ["2", "2", "Embarque/Desembarque Sombrio"],
    ["3", "3", "Embarque/Desembarque Santa Rosa do Sul"],
    ["4", "4", "Embarque/Desembarque Torres"],
    ["5", "5", "Embarque/Desembarque Terra de Areia"],
    ["6", "6", "Embarque/Desembarque Capão da Canoa"],
    ["7", "7", "Embarque/Desembarque Xangri-Lá"],
    ["8", "8", "Embarque/Desembarque Três Cachoeiras"],
    ["9", "9", "Embarque/Desembarque Osório"],
  ];

  for (const data of pois) {
    await db.execute(
      `INSERT INTO UFSCarona.POI (id_poi, id_address, name) VALUES (?, ?, ?);`,
      data
    );
  }
};
