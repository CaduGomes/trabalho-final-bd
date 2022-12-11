import { Query } from "../../types";
import { logQueryResult } from "../helpers/logQueryResult";

const getTravels: Query<{
  date: Date;
  origin: string;
  destination: string;
}> = async (db, data) => {
  try {
    const sql = `SELECT * FROM Travel WHERE 
    Travel.id_travel IN 
        (SELECT Travel.id_travel FROM Travel
	        INNER join Travel_User on Travel_User.id_travel = Travel.id_travel 
	        INNER join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            INNER join POI on POI.id_poi = POI_Travel_User.id_poi
            WHERE POI_Travel_User.id_poi = :origin AND Travel_User.user_type = 'driver' AND NOT POI_Travel_User.type = 'destination')
    AND Travel.id_travel IN 
        (SELECT Travel.id_travel FROM Travel
	        INNER join Travel_User on Travel_User.id_travel = Travel.id_travel 
	        INNER join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            INNER join POI on POI.id_poi = POI_Travel_User.id_poi
            WHERE POI_Travel_User.id_poi = :destination AND Travel_User.user_type = 'driver' AND NOT POI_Travel_User.type = 'origin')
    AND
    Travel.date = :date`;

    const [result] = await db.execute(sql, {
      ...data,
      date: data.date.toISOString(),
    });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching travels: ${(err as Error).toString()}`);
  }
};

const getTravelUsers: Query<string> = async (db, id) => {
  try {
    const sql = `
    SELECT User.id_user, User.name, User.age, Campus_UFSC.name, Destination.cityName as destinationCityName, Destination.stateName as destinationStateName,
    Origin.cityName as originCityName, Origin.stateName as originStateName from User
	  INNER JOIN Campus_UFSC on Campus_UFSC.id_campus = User.id_campus
	  INNER JOIN Travel on Travel.id_travel = :id
    INNER JOIN
	    (SELECT User.id_user, City.name as cityName, State.name as stateName from User
	    INNER JOIN Travel_User on Travel_User.id_travel = :id
	    INNER JOIN POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
	    INNER JOIN POI on POI.id_poi = POI_Travel_User.id_poi
	    INNER JOIN Address on Address.id_address = POI.id_address
	    INNER JOIN City on City.id_city = Address.id_city
	    INNER JOIN State on State.id_state = City.id_state
	    INNER JOIN Travel on Travel.id_travel = :id
	    where POI_Travel_User.type = 'destination') Destination on Destination.id_user = User.id_user
    INNER JOIN
	    (SELECT User.id_user, City.name as cityName, State.name as stateName from User
	    INNER JOIN Travel_User on Travel_User.id_travel = :id
	    INNER JOIN POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
	    INNER JOIN POI on POI.id_poi = POI_Travel_User.id_poi
	    INNER JOIN Address on Address.id_address = POI.id_address
	    INNER JOIN City on City.id_city = Address.id_city
	    INNER JOIN State on State.id_state = City.id_state
	    INNER JOIN Travel on Travel.id_travel = :id
	    where POI_Travel_User.type = 'origin') Origin on Origin.id_user = User.id_user;
    `;

    const [result] = await db.execute(sql, { id });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching travel: ${(err as Error).toString()}`);
  }
};

const getUserInfo: Query<string> = async (db, id) => {
  try {
    const sql = `
    SELECT 
    User.name, User.age, User.email, User.password, User.cpf, 
    Campus_UFSC.name, 
    Car.model, Car.color, Car.plate,
    Brand.name
    from User
    INNER JOIN Campus_UFSC on User.id_campus = Campus_UFSC.id_campus
    INNER JOIN Car on User.id_user = Car.id_user
    INNER JOIN Brand on Car.id_brand = Brand.id_brand
    where User.id_user = :id;
    `;

    const [result] = await db.execute(sql, { id });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

export { getTravels, getTravelUsers, getUserInfo };
