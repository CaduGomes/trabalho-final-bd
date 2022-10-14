import createConnection from "./database/createConnection";

const app = async () => {
  const db = await createConnection();

  await db.execute("SELECT * FROM dados", (err, result) => {
    console.table(result);
  });
};

export default app;
