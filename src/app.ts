import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import fakeData from "./database/inserts";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  await fakeData(db);

  await db.execute("SELECT * FROM dados", (err, result) => {
    console.table(result);
  });
};

export default app;
