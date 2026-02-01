import Issue from "../model/issue.model.js";

export const getAllIssues = async(req,res)=>{
    try {
        const issuesData= await Issue.find().sort({createdAt:-1});
        res.status(200).json({
            success:true,
            data:issuesData,
            message:"All issues fetched Successfully !"
        });
    } catch (error) {
         res.status(500).json({
            success:false,
            message:"fetching Issues Failed !"
        });
    }
}

export const getIssueById = async(req,res)=>{
    try{
        const id = req.params.id;
        const data=await Issue.findById(id);

         res.status(200).json({
            success:true,
            data:data,
            message:"issue fetched Successfully !"
        });       
    }
        catch (error) {
         res.status(500).json({
            success:false,
            message:"fetching Issue Failed !"
        });
    }
}

export const createIssue = async (req,res)=>{
    try {
        const {title,category,department,description,urgency,isAnonymous,imgUrl}=req.body;
        
        if(!title?.trim()){
           return res.status(400).json({
                success:false,
                message:"Title is required !"
            });
        }
        const issueData={
            title:title?.trim(),
            category,
            department,
            urgency,
            isAnonymous
        };
        issueData.createdBy=req.user._id;

        if(imgUrl){
            issueData.imgUrl=imgUrl;
        };
        if(description?.trim()){
            issueData.description=description?.trim();
        }        

        const newIssue=await Issue.create(issueData);
        res.status(201).json({
            success:true,
            data:newIssue,
            message:"Issue Successfully published !"
        });

    } catch (error) {
        console.error("Create Issue Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
}};

export const getSortedIssues = async (req, res) => {
  try {
    const { urgency,status,category} = req.query;

    const filter = {};

    if (urgency) {
      filter.urgency = urgency;
    }
    if(status)
      filter.status = status;

    if(category)
        filter.category = category;
    const issues = await Issue.find(filter).sort({ createdAt: -1 });

    res.status(200).json(issues);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserIssues = async(req,res)=>{
    if(!req?.user)
        return res.status(401).json({
            sucess:false,
            message:"User token not exist !"
        });

    const userId=req?.user?._id ;
    const userIssuesData=await Issue.find({createdBy:userId});
    
    return res.status(200).json({
        success:true,
        message:"User Issues fetched !",
        data:userIssuesData
    });
}
