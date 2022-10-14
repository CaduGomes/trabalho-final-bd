import createConnection from "./database/createConnection";

const app = async () => {
  try {
    await createConnection();
  } catch (error) {
    console.error("Database Error: " + error);
    process.exit(1);
  }
};

export default app;
