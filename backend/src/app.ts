import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import { getTravelUsers, getTravels, getUserInfo } from "./database/queries";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  await getTravels(db, {
    date: new Date("2021-06-01"),
    origin: "3",
    destination: "4",
  });
  await getTravelUsers(db, "1");
  await getUserInfo(db, "1");
};

export default app;
