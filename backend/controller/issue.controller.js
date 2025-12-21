import express from "express";
import Issue from "../model/issue.model.js";

export const getAllIssues = async(req,res)=>{
    try {
        const issuesData= await Issue.find().sort({createdAt:1});
        res.status(200).json({
            success:true,
            data:issuesData,
            message:"All issues fetched"
        });
    } catch (error) {
         res.status(500).json({
            success:false,
            message:"fetching Issues Failed !"
        });
    }
}

export const createIssue = async (req,res)=>{
    try {
        const {title,category,department,description,urgency,isAnonymous,imgUrl}=req.body;

        console.log(title,category,department,urgency,isAnonymous,imgUrl);
        
        if(!title?.trim()){
           return res.status(400).json({
                success:false,
                message:"Title is required !"
            });
        }
        const issueData={
            title:title.trim(),
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
            issueData.description=description.trim();
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