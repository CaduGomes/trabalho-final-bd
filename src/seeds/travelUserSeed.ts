import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_travel_user, id_user, id_travel, user_type, price]
  const travelUsers = [
    ['1', '1', '1', 'driver', '0'],
    ['2', '2', '1', 'passenger', '20'],
    ['3', '3', '1', 'passenger', '50'],
    ['4', '1', '2', 'driver', '0'],
    ['5', '4', '3', 'driver', '0'],
    ['6', '5', '3', 'passenger', '100'],
  ];

  for (const data of travelUsers) {
    await db.execute(
      `INSERT INTO ufscarona.travel_user (id_travel_user, id_user, id_travel, user_type, price) VALUES (?, ?, ?, ?, ?);`,
      data
    );
  }
};
