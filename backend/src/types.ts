import { Connection, OkPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export type Query<T> = (
  db: Connection,
  data: T
) => Promise<
  | RowDataPacket[]
  | RowDataPacket[][]
  | OkPacket
  | OkPacket[]
  | ResultSetHeader
  | undefined
>;
