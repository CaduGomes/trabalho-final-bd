import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_travel_user, id_user, id_travel, user_type, price]
  const travelUsers = [
    ["1", "1", "1", "driver", "0"],
    ["2", "2", "1", "passenger", "20"],
    ["3", "3", "1", "passenger", "50"],
    ["4", "1", "2", "driver", "0"],
    ["5", "5", "3", "driver", "0"],
    ["6", "3", "3", "passenger", "100"],
    ["7", "1", "3", "passenger", "50"],
    ["8", "6", "4", "driver", "0"],
    ["9", "1", "4", "passenger", "30"],
    ["10", "6", "5", "driver", "0"],
    ["11", "1", "5", "passenger", "50"],
  ];

  for (const data of travelUsers) {
    await db.execute(
      `INSERT INTO UFSCarona.Travel_User (id_travel_user, id_user, id_travel, user_type, price) VALUES (?, ?, ?, ?, ?);`,
      data
    );
  }
};
