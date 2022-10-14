import mysql from "mysql";
const createConnection = async () => {
  var con = mysql.createConnection({
    host: process.env.DATABASE_URL || "localhost",
    user: process.env.DATABASE_USER || "admin",
    password: process.env.DATABASE_PASSWORD || "admin",
    port: Number(process.env.DATABASE_PORT) || 3306,
  });

  con.connect(function (err) {
    if (err) {
      throw err;
    }
    console.info("Database connected!");
  });

  return con;
};

export default createConnection;
