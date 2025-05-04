import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

import { JWT_SECRET } from "@repo/common-backend/config";
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("http server is running")
})

app.post("/signup",(req,res)=>{

})

app.post("/signin",(req,res)=>{
    const userId=1
    const token=jwt.sign({
        userId
    },JWT_SECRET)
})

app.post("/room",middleware,(req,res)=>{

})

app.listen(3001,()=>{
    console.log(`Server is running on port 3001`)
})