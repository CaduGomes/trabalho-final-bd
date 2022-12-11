import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2/promise";

export const logQueryResult = (
  result:
    | RowDataPacket[]
    | RowDataPacket[][]
    | OkPacket
    | OkPacket[]
    | ResultSetHeader
) => {
  console.log("Query result:");
  console.table(result);
};
