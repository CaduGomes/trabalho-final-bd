import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_brand, name]
  const brands = [
    ["1", "Chevrolet"],
    ["2", "Fiat"],
    ["3", "Ford"],
    ["4", "Nissan"],
    ["5", "Hyundai"],
    ["6", "Volkswagen"],
    ["7", "Renault"],
    ["8", "BMW"],
    ["9", "Citroën"],
    ["10", "Mitsubishi"],
    ["11", "Toyota"],
    ["12", "Honda"],
  ];

  for (const data of brands) {
    await db.execute(
      `INSERT INTO UFSCarona.Brand (id_brand, name)
      VALUES (?, ?);`,
      data
    );
  }
};
