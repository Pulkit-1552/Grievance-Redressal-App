import jwt from "jsonwebtoken";

export const isValidStudent=async(req,resp,next)=>{
    try{
    const token=req.cookies.tokenKey; 
    if (!token)
    return resp.status(400).json({
      success: false,
      message: "Token missing!",
    });

    const match=jwt.verify(token,process.env.SECRET);
    const studentId=match.id;
    const student=await student.findById(studentId);

    
    if(!student){
        return resp.status(401).json({
            success:false,
            message:"student not Exists!"
        });
    }
    req.student=student;
    next();
    }
    catch(err){
       return resp.status(401).json({
            status:false,
            message:`error:${err.message}`
        });
    };
};

