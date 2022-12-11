import { Connection } from "mysql2/promise";
import brandSeed from "./brandSeed";

export default async (db: Connection) => {
  await brandSeed(db);

  // [id_car, id_user, id_brand, plate, color, model]
  const cars = [
    ["1", "1", "1", "LYR5252", "Preto", "Onix 2020"],
    ["2", "5", "12", "LYO7787", "Branco", "Civic 2021"],
    ["3", "6", "6", "IZP7621", "Vermelho", "Polo 2019"],
    ["4", "7", "1", "MBO3261", "Branco", "Onix 2020"],
  ];

  for (const data of cars) {
    await db.execute(
      `INSERT INTO UFSCarona.Car (id_car, id_user, id_brand, plate, color, model) VALUES (?, ?, ?, ?, ?, ?);`,
      data
    );
  }
};
