import express from "express";
import {
    createUser,
    getUser
} from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.get("/searchUser/:email", getUser);


export default userRouter;
