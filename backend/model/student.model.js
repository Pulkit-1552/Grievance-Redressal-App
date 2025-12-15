import mongoose from "mongoose";

const studentSchema= new mongoose.Schema({
    username:{type:String,required:true,min:2},
    email:{type:String,required:true,min:3,unique:true},
    password:{type:String,required:true,min:4}
});

const Student=mongoose.model("student",studentSchema);

export default Student;

