import mysql from "mysql2/promise";

const createConnection = async () => {
  try {
    const con = await mysql.createConnection({
      host: process.env.DATABASE_URL || "localhost",
      user: process.env.DATABASE_USER || "admin",
      password: process.env.DATABASE_PASSWORD || "admin",
      port: Number(process.env.DATABASE_PORT) || 3306,
      namedPlaceholders: true,
    });

    console.info("Database connected!");

    return con;
  } catch (error) {
    console.error("Database error: " + error);
    process.exit(1);
  }
};

export default createConnection;
