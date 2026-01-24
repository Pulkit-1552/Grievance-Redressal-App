import express from "express";
import { createIssue, getAllIssues,getSortedIssues } from "../controller/issue.controller.js";
import { isValidUser } from "../middleware/auth.middleware.js";

const issueRouter=express();

issueRouter.get("/",getAllIssues);
issueRouter.post("/publish",isValidUser,createIssue);
issueRouter.get("/",getSortedIssues);

export default issueRouter;