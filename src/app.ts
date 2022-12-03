import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import fakeData from "./database/inserts";
import { searchTravel } from "./database/querys";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  await fakeData(db);

  const result = await searchTravel(db, new Date("2021-06-01"), "3", "4");
  console.table(result);

  await db.execute("SELECT * FROM dados", (err, result) => {
    console.table(result);
  });
};

export default app;
