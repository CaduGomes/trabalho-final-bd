import { Connection } from "mysql2/promise";
import addressSeed from "./addressSeed";
import campusSeed from "./campusSeed";
import paymentMethodSeed from "./paymentMethodSeed";
import paymentMethodTravelSeed from "./paymentMethodTravelSeed";
import POISeed from "./POISeed";
import POITravelUser from "./POITravelUser";
import travelSeed from "./travelSeed";
import travelUserSeed from "./travelUserSeed";
import userSeed from "./userSeed";

export default async (db: Connection) => {
  await addressSeed(db);
  await campusSeed(db);
  await POISeed(db);
  await userSeed(db);
  await paymentMethodSeed(db);
  await travelSeed(db);
  await travelUserSeed(db);

  await paymentMethodTravelSeed(db);
  await POITravelUser(db);
};
