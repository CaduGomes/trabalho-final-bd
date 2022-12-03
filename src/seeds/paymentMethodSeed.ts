import { Connection } from "mysql2/promise";

export default async (db: Connection) => {
  // [id_payment_method, name]
  const paymentMethods = [
    ["1", "Pix"],
    ["2", "Cartão"],
    ["3", "Dinheiro"],
  ];

  for (const data of paymentMethods) {
    await db.execute(
      `INSERT INTO ufscarona.payment_method (id_payment_method, name)
      VALUES (?, ?);`,
      data
    );
  }
};
