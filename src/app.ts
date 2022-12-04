import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import { getTravelUsers, getTravels, getUserInfo } from "./database/queries";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  await getTravels(db, new Date("2021-06-01"), "3", "4");
  await getTravelUsers(db, "1");
  await getUserInfo(db, "1");
};

export default app;
