import { config as configureEnvVars } from "dotenv";
import mongoose from "mongoose";

configureEnvVars();
const link = process.env.MONGODB_LINK;
const password = process.env.MONGODB_PASSWORD;
const dbname = process.env.MONGODB_DATABASENAME;

const db = () => {
  mongoose
    .connect(
      `mongodb+srv://D4L13N:${password}@clusterprincipal.vizn2aa.mongodb.net/${dbname}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => console.log(err));
};

export default db;
