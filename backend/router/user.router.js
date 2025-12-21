import {Router} from "express";
import { isValidUser } from "../middleware/auth.middleware.js";
import { createUser, userLogin } from "../controller/user.controller.js";


const userRouter=Router();

userRouter.post("/signup",createUser);
userRouter.post("/login",userLogin);


export default userRouter;
