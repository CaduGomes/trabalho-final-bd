import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_payment_method, id_travel]
  const paymentMethodTravels = [
    ["1", "1"],
    ["2", "1"],
    ["3", "2"],
    ["1", "3"],
    ["2", "3"],
    ["3", "3"],
    ["2", "4"],
    ["1", "5"],
    ["2", "6"],
    ["3", "6"],
    ["3", "7"],
  ];

  for (const data of paymentMethodTravels) {
    await db.execute(
      `INSERT INTO ufscarona.payment_method_travel (id_payment_method, id_travel)
      VALUES (?, ?);`,
      data
    );
  }
};
