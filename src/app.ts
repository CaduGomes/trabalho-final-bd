import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);
};

export default app;
