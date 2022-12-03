import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_travel, date]
  const travels = [
    ["1", "2022-06-01"],
    ["2", "2022-06-01"],
    ["3", "2022-06-02"],
    ["4", "2022-06-02"],
    ["5", "2022-06-04"],
    ["6", "2022-07-01"],
    ["7", "2022-07-01"],
  ];

  for (const data of travels) {
    await db.execute(
      `INSERT INTO ufscarona.travel (id_travel, date) VALUES (?, ?);`,
      data
    );
  }
};
