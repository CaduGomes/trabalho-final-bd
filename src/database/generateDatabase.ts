import { Connection } from "mysql2";

const generateDatabase = async (db: Connection) => {
    try {
        db.query(
        "CREATE DATABASE IF NOT EXISTS test",
        function (err, result) {
            if (err) throw err;
            console.log("Database created");
        }
        );
    } catch (error) {
        console.error("Database error: " + error);
        process.exit(1);
    }    
};