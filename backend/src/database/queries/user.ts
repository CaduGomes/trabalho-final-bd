import { Query } from "../../types";
import { logQueryResult } from "../helpers/logQueryResult";

export const getUserHistory: Query<{ userType: string; userId: string }> = async (
  db,
  data
) => {
  try {
    const sql = `
      select
      t.travelId,
      max(t.travelDate) as travelDate,
      max(t.travelPrice) as travelPrice,
      max(t.poiOriginName) as poiOriginName,
      max(t.poiOriginId) as poiOriginId,
      max(t.poiDestinationName) as poiDestinationName,
      max(t.poiDestinationId) as poiDestinationId
      from (select 
            Travel.id_travel as travelId,
            Travel.date as travelDate,
            Travel_User.price as travelPrice,
            POI.name as poiOriginName,
            POI.id_poi as poiOriginId,
            '' as poiDestinationName,
            '' as poiDestinationId
            from User
            inner join Travel_User on Travel_User.id_user = User.id_user
            inner join Travel on Travel_User.id_travel = Travel.id_travel
            inner join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            inner join POI on POI.id_poi = POI_Travel_User.id_poi
            where Travel_User.user_type = :userType and User.id_user = :userId and POI_Travel_User.type = 'origin'
            union
            select 
            Travel.id_travel as travelId,
            Travel.date as travelDate,
            Travel_User.price as travelPrice,
            '' as poiOriginName,
            '' as poiOriginId,
            POI.name as poiDestinationName,
            POI.id_poi as poiDestinationId
            from User 
            inner join Travel_User on Travel_User.id_user = User.id_user
            inner join Travel on Travel_User.id_travel = Travel.id_travel
            inner join POI_Travel_User on POI_Travel_User.id_travel_user = Travel_User.id_travel_user
            inner join POI on POI.id_poi = POI_Travel_User.id_poi
            where Travel_User.user_type = :userType and User.id_user = :userId and POI_Travel_User.type = 'destination') t
      group by t.travelId;
    `;

    const [result] = await db.execute(sql, data);
    logQueryResult(result);

    return result as any;
  } catch (err) {
    console.log(`Error searching user: ${(err as Error).toString()}`);
  }
};
