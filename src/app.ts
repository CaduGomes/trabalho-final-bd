import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  await db.execute("SELECT * FROM dados", (err, result) => {
    console.table(result);
  });
};

export default app;
