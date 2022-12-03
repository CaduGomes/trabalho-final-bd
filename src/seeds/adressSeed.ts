import { Connection } from "mysql2/promise";
import citySeed from "./citySeed";

export default async (db: Connection) => {
  await citySeed(db);

  await db.query(
    `INSERT INTO ufscarona.address (id_address, id_city, place, district, cep, number)
     VALUES ('fc1bf8ed-8b42-4f4d-93fd-077a7c2661a5', '3b24916c-63bd-4fb3-a0c7-792a5f2a710c', 'Av. João Goulart', 'Cidade Alta', '88900-000', '30');`
  );
};
