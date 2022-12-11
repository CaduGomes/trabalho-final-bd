import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_travel_user, id_poi, type, order_number]
  const POITravelUsers = [
    ["1", "1", "origin", "1"],
    ["1", "3", "between", "2"],
    ["1", "4", "destination", "3"],
    ["2", "3", "origin", "1"],
    ["2", "4", "destination", "2"],
    ["3", "2", "origin", "1"],
    ["3", "3", "destination", "2"],
    ["5", "1", "origin", "1"],
    ["5", "2", "destination", "2"],
    ["7", "1", "origin", "1"],
    ["7", "2", "destination", "2"],
    ["8", "4", "origin", "1"],
    ["8", "5", "between", "2"],
    ["8", "6", "between", "3"],
    ["8", "7", "destination", "4"],
    ["9", "5", "origin", "1"],
    ["9", "7", "destination", "2"],
    ["10", "5", "origin", "1"],
    ["10", "6", "destination", "2"],
    ["11", "5", "origin", "1"],
    ["11", "6", "destination", "2"],
  ];

  for (const data of POITravelUsers) {
    await db.execute(
      `INSERT INTO UFSCarona.POI_Travel_User (id_travel_user, id_poi, type, order_number) VALUES (?, ?, ?, ?);`,
      data
    );
  }
};
