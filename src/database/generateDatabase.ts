import { Connection } from "mysql2";
var fs = require("fs");
var readline = require("readline");

const generateDatabase = async (db: Connection) => {
  try {
    db.query(`DROP DATABASE IF EXISTS UFSCarona`, function (err, result) {
      if (err) throw err;
      console.log("Database droped created");
    });
    db.query(`CREATE DATABASE IF NOT EXISTS UFSCarona`, function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });

    db.query(`USE UFSCarona`, function (err, result) {
      if (err) throw err;
      console.log("using UFSCarona database");
    });

    const dataSql = fs
      .readFileSync("./brModelo/DDL.sql")
      .toString()
      .split(";")
      .filter(
        (line?: string) => line != null && line?.length > 0 && line !== "\n"
      );

    dataSql.forEach((sql: string) => {
      try {
        db.query(sql, function (err, result) {
          if (err) {
            console.log(err);
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.error("Database error: " + error);
    process.exit(1);
  }
};

export default generateDatabase;
