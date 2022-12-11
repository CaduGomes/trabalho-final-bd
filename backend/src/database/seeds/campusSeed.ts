import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_campus, id_address, name]
  const campi = [
    ["1", "10", "Campus Araranguá"],
    ["2", "11", "Campus Trindade"],
    ["3", "12", "Campus Joinville"],
    ["4", "13", "Campus Blumenau"],
    ["5", "14", "Campus Curitibanos"],
  ];

  for (const data of campi) {
    await db.execute(
      `INSERT INTO UFSCarona.Campus_UFSC (id_campus, id_address, name) VALUES (?, ?, ?);`,
      data
    );
  }
};
