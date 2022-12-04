import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_travel_user, id_poi, type, order_number]
  const POITravelUsers = [
    ["1", "1", "origin", "1"],
    ["1", "3", "between", "2"],
    ["1", "4", "destination", "3"]
  ];

  for (const data of POITravelUsers) {
    await db.execute(
      `INSERT INTO ufscarona.poi_travel_user (id_travel_user, id_poi, type, order_number) VALUES (?, ?, ?, ?);`,
      data
    );
  }
};
