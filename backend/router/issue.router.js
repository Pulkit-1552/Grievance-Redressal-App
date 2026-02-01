import express from "express";
import { createIssue, getAllIssues,getIssueById,getSortedIssues, getUserIssues } from "../controller/issue.controller.js";
import { isValidUser } from "../middleware/auth.middleware.js";

const issueRouter=express();

issueRouter.get("/",getAllIssues);
issueRouter.post("/publish",isValidUser,createIssue);
issueRouter.get("/sort",getSortedIssues);
issueRouter.get("/myissue",isValidUser,getUserIssues);
issueRouter.get("/issuedetails/:id",getIssueById);

export default issueRouter;

