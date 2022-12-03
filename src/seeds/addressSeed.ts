import { Connection } from "mysql2/promise";
import citySeed from "./citySeed";

export default async (db: Connection) => {
  await citySeed(db);

  const addresses = [
    ["1", "1", "Av. João Goulart", "Cidade Alta", "88900-000", "30", null],
  ];

  for (const data of addresses) {
    await db.execute(
      `INSERT INTO ufscarona.address (id_address, id_city, place, district, cep, number, complement)
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
      data
    );
  }
};
