import { Connection } from "mysql2/promise";

export type Query<T> = (
  db: Connection,
  data: T
) => Promise<
  Record<string, string | number | boolean | null | undefined>[] | undefined
>;
