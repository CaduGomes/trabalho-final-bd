import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import { getTravelUsers, getTravels, getUserInfo } from "./database/queries";
import { startServer } from "./server";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  startServer(db);

  await getTravels(db, {
    date: "2021-06-01",
    origin: "3",
    destination: "4",
  });
  await getTravelUsers(db, "1");
  await getUserInfo(db, "1");
};

export default app;
