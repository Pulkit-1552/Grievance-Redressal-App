import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.model.js";

export const createUser=async (req,res)=>{
try{
    const data=req.body;
    const{username,email,password,rollNo}=data;
    if(!username?.trim() || !email?.trim() || !password.trim() ||!rollNo.trim() )
    res.status(400).json({
        success:false,
        message:"All fields required !"
});
    const encripted=await bcrypt.hash(data.password,10);
    data.password=encripted;
    
    const newUser= await User.create(data);
    const newToken = jwt.sign({id:newUser._id},process.env.SECRET);
    res.status(201).json({
        success:true,
        data:newUser,
        token:newToken,
        message:"Account created successfully!"
    });

}catch(err){
    console.log(`error occured! : ${err.message}`);
}
};



export const userLogin=async (req,resp)=>{
try{
    const {email,password}=req.body;

    if(!email?.trim() || !password?.trim())
    return resp.status(400).json({
    success:false,
    message:"All fields required",
    });

    const user= await User.findOne({email:email});
    if(!user)
      return resp.status(401).json({
    success:false,
    message:"User not found!",
    });

    const decoded=await bcrypt.compare(password,user.password);
    if(!decoded)
     return resp.status(401).json({
    success:false,
    message:"password mismatched! ",
    });

       const newToken = jwt.sign({id:user._id},process.env.SECRET);

    return resp.status(200).cookie("tokenKey",newToken).json({
        success:true,
        message:"login successfull",
        token:newToken,
        username:user.username
    });
}
catch(err){
     resp.status(500).json({
    sucess:false,
    message:`error occured ${err.message}`,
    });
}
};