import app from "./app";
import dotEnv from "dotenv";

console.info("Starting...");
dotEnv.config();
app();
