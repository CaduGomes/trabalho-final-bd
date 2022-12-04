import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import { searchTravel } from "./database/queries";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  const result = await searchTravel(db, new Date("2021-06-01"), "3", "4");

  console.table(result);
};

export default app;
