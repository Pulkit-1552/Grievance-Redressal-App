import {Router} from "express";
import { isValidStudent } from "../middleware/auth.middleware.js";
import { createStudent, userLogin } from "../controller/student.controller.js";

const studentRouter=Router();

studentRouter.post("/signup",createStudent);
studentRouter.post("/login",userLogin);


export default studentRouter;
