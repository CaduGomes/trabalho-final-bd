import { Connection } from "mysql2";

const searchTravel = async (db: Connection) => {
  try {
    // destination & date & time & origin
    const sql = `SELECT * FROM Travel WHERE data = ?`;
  } catch (err) {
    console.log(`Error searching travel: ${(err as Error).toString()}`);
  }
};
