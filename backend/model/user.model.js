import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{type:String,required:true,min:2},
    rollNo:{type:String,required:true},
    email:{type:String,required:true,min:3,unique:true},
    password:{type:String,required:true,min:4},
    role:{type:String,required:true,enum:["admin","student"],default:"student"}
});

const User=mongoose.model("user",userSchema);

export default User;

