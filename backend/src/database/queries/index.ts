import { Query } from "../../types";
import { logQueryResult } from "../helpers/logQueryResult";

export const getTravels: Query<{
  date: string;
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

    const [result] = await db.execute(sql, data);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching travels: ${(err as Error).toString()}`);
  }
};

export const getTravelUsers: Query<string> = async (db, id) => {
  try {
    const sql = `
    SELECT User.id_user, User.name, User.age, Campus_UFSC.name as campusName, Destination.cityName as destinationCityName, Origin.travelId, Destination.travelId, Destination.stateName as destinationStateName,
    Origin.cityName as originCityName, Origin.stateName as originStateName from User
	  INNER JOIN Campus_UFSC on Campus_UFSC.id_campus = User.id_campus
	  INNER JOIN Travel on Travel.id_travel = :id
    INNER JOIN
	    (SELECT User.id_user, City.name as cityName, State.name as stateName, Travel_User.id_travel as travelId from User
	    INNER JOIN Travel_User on Travel_User.id_travel = User.id_user
	    INNER JOIN POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
	    INNER JOIN POI on POI.id_poi = POI_Travel_User.id_poi
	    INNER JOIN Address on Address.id_address = POI.id_address
	    INNER JOIN City on City.id_city = Address.id_city
	    INNER JOIN State on State.id_state = City.id_state
	    where POI_Travel_User.type = 'destination' AND Travel_User.id_travel = :id) Destination on Destination.id_user = User.id_user
    INNER JOIN
	    (SELECT User.id_user, City.name as cityName, State.name as stateName, Travel_User.id_travel as travelId from User
	    INNER JOIN Travel_User on Travel_User.id_user = User.id_user
	    INNER JOIN POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
	    INNER JOIN POI on POI.id_poi = POI_Travel_User.id_poi
	    INNER JOIN Address on Address.id_address = POI.id_address
	    INNER JOIN City on City.id_city = Address.id_city
	    INNER JOIN State on State.id_state = City.id_state
	    INNER JOIN Travel on Travel.id_travel = :id
	    where POI_Travel_User.type = 'origin' AND Travel_User.id_travel = :id) Origin on Origin.id_user = User.id_user;
    `;

    const [result] = await db.execute(sql, { id });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching travel: ${(err as Error).toString()}`);
  }
};

export const getUserInfo: Query<string> = async (db, id) => {
  try {
    const sql = `
    SELECT 
    User.name, User.age, User.email, User.cpf, 
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

export const getIDPOI: Query<string> = async (db, name) => {
  try {
    const sql = `
    SELECT id_poi
    FROM POI
    INNER JOIN Address ON POI.id_address = Address.id_address
    INNER JOIN City ON Address.id_city = City.id_city
    WHERE City.name = :name;
    `;

    const [result] = await db.execute(sql, { name });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

// consulta com função de agregação
export const getTotalSumTravels: Query<string> = async (db, user_id) => {
  try {
    const sql = `
    SELECT Travel.id_travel as travelId, Travel.date, sum(travel_user.price) as totalSum
    FROM User 
    INNER JOIN Travel_User ON Travel_User.id_user = User.id_user
    INNER JOIN Travel ON Travel_User.id_travel = Travel.id_travel
    WHERE Travel_User.user_type = 'passenger' AND User.id_user = :user_id
    GROUP BY travel_user.id_travel_user AND travel_user.user_type;
    `;

    const [result] = await db.execute(sql, { user_id });
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

// consulta com função de agregação e dados para gráfico
export const getCarsByCampus: Query<string> = async (db) => {
  try {
    const sql = `
    SELECT Campus_UFSC.name, count(*) AS total
    FROM User
    INNER JOIN Car ON Car.id_user = User.id_user
    INNER JOIN Campus_UFSC ON User.id_campus = Campus_UFSC.id_campus
    GROUP BY Campus_UFSC.name
    `;

    const [result] = await db.execute(sql);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

// consulta com função de agregação e dados para gráfico
export const getPOIsMostBadalados: Query<string> = async (db) => {
  try {
    const sql = `
    SELECT POI.name, count(*) AS total
    FROM Travel_User
    INNER JOIN POI_Travel_User ON Travel_User.id_travel_user = POI_Travel_User.id_travel_user
    INNER JOIN POI ON POI_Travel_User.id_POI = POI.id_POI
    GROUP BY POI.name
    `;

    const [result] = await db.execute(sql);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

// Consulta com função de agregação e dados para gráfico
export const getTravelsByCampus: Query<string> = async (db) => {
  try {
    const sql = `
    SELECT Campus_UFSC.name, count(*) as total from Travel
    INNER JOIN Travel_User ON Travel.id_travel = Travel_User.id_travel
    INNER JOIN User ON Travel_User.id_user = User.id_user
    INNER JOIN Campus_UFSC ON User.id_campus = Campus_UFSC.id_Campus
    GROUP BY Campus_UFSC.name
    `;

    const [result] = await db.execute(sql);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};

export const getPaymentMethodUses: Query<string> = async (db) => {
  try {
    const sql = `
    select PM.name, count(*)
    from Travel T
    inner join Payment_Method_Travel PMT on PMT.id_travel = T.id_travel
    inner join Payment_Method PM on PM.id_payment_method = PMT.id_payment_method
    group by PM.name
    `;

    const [result] = await db.execute(sql);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};
