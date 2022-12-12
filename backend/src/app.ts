import createConnection from "./database/createConnection";
import generateDatabase from "./database/generateDatabase";
import { getTravelUsers, getTravels, getUserInfo } from "./database/queries";
import { updateCarColor, updateCarModel, updateUserCampus, updateUserEmail, updateUserPassword, deleteCar, } from "./database/queries/update_delete";
import { startServer } from "./server";

const app = async () => {
  const db = await createConnection();

  await generateDatabase(db);

  startServer(db);

  await getTravels(db, {
    date: "2022-06-01",
    origin: "3",
    destination: "4",
  });
  await getTravelUsers(db, "1");
  await getUserInfo(db, "1");

  await updateCarColor(db);
  await updateCarModel(db);
  await updateUserCampus(db);
  await updateUserEmail(db);
  await updateUserPassword(db);
  await deleteCar(db);
};

export default app;
