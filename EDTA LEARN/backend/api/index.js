import express from "express";
import cors from "cors";
import userRouter from "../routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

//parsear x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use("/edtasimulator", userRouter);

export default app;
