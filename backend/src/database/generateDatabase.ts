import { Connection } from "mysql2/promise";
import mainSeed from "./seeds/mainSeed";
import fs from "fs";

const generateDatabase = async (db: Connection) => {
  try {
    await db.query(`DROP DATABASE IF EXISTS UFSCarona`);

    console.info("Database dropped");

    await db.query(`CREATE DATABASE IF NOT EXISTS UFSCarona`);

    console.info("Database created");

    await db.query(`USE UFSCarona`);

    console.info("using UFSCarona database");

    const dataSql = fs
      .readFileSync("./brModelo/DDL.sql")
      .toString()
      .split(";")
      .filter(
        (line?: string) => line != null && line?.length > 0 && line !== "\n"
      );

    for (const query of dataSql) {
      await db.query(query);
    }

    console.info("DDL script has been run!");

    await mainSeed(db);

    console.info("Seeds have been run!");
  } catch (error) {
    console.error("Database error: " + error);
    process.exit(1);
  }
};

export default generateDatabase;
