import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import studentRouter from "./router/student.router.js";

dotenv.config();

const app=express();
app.use(cookieParser());
app.use(express.json());

app.use("/",studentRouter);

mongoose.connect(process.env.dbURL).then(()=>{

    console.log("DB connnected!");

    app.listen(8080,()=>{
    console.log("server started at 8080!");
})
}).catch(err=> console.log(err.message));
