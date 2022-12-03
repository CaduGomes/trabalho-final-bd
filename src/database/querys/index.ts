import { Connection } from "mysql2";

const searchTravel = async (
  db: Connection,
  date: Date,
  origin: string,
  destination: string
) => {
  try {
    // destination & date & time & origin
    const sql = `SELECT * FROM Travel WHERE 
    Travel.id_travel IN 
        (SELECT Travel.id_travel FROM Travel
	        INNER join Travel_User on Travel_User.id_travel = Travel.id_travel 
	        INNER join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            INNER join POI on POI.id_poi = POI_Travel_User.id_poi
            WHERE POI_Travel_User.id_poi = ? AND Travel_User.user_type = 'driver' AND NOT POI_Travel_User.type = 'destination')
    AND Travel.id_travel IN 
        (SELECT Travel.id_travel FROM Travel
	        INNER join Travel_User on Travel_User.id_travel = Travel.id_travel 
	        INNER join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            INNER join POI on POI.id_poi = POI_Travel_User.id_poi
            WHERE POI_Travel_User.id_poi = ? AND Travel_User.user_type = 'driver' AND NOT POI_Travel_User.type = 'origin')
    AND
    Travel.date = ?`;

    db.execute(
      sql,
      [origin, destination, date.toISOString()],
      (err, result) => {
        console.table(result);
        console.log(err);
      }
    );
  } catch (err) {
    console.log(`Error searching travel: ${(err as Error).toString()}`);
  }
};

export { searchTravel };
