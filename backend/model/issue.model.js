import mongoose from "mongoose";

const issueSchema=new mongoose.Schema({
    title:{type:String,required:true,min:2,},
    description:{type:String,default:"No description provided !"},
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true
    },
    category:{type:String,enum:["academic","ragging","faculty","infrastructure","hostel","facilities","others"],default:"others"},
    department:{type:String,enum:["engineering","mba","humanities","others"],default:"others"},
    urgency:{type:String,enum:["low","medium","high","critical"],default:"low"},
    isAnonymous:{type:Boolean,default:false},
    imgUrl:{type:String,default:"https://placehold.net/default.png"},
    status:{type:String,default:"pending",enum:["pending","resolved","in-progress"]}
},
{timestamps:true}
);
const Issue=mongoose.model("issue",issueSchema);

export default Issue;
