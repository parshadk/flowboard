import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import {CreateUserSchema,CreateRoomSchema,SigninSchema } from "@repo/common/types"
import { JWT_SECRET } from "@repo/common-backend/config";
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("http server is running")
})

app.post("/signup",(req,res)=>{
    const data=CreateUserSchema.safeParse(req.body)
    if(!data.success){
        res.status(400).json({
            msg:"Invalid data",
        })
        return;
    }
})

app.post("/signin",(req,res)=>{
    const data=SigninSchema.safeParse(req.body);
    if(!data.success){
        res.status(400).json({
            msg:"Invalid data",
        })
        return;
    }
    const userId=1
    const token=jwt.sign({
        userId
    },JWT_SECRET)
})

app.post("/room",middleware,(req,res)=>{
    const data=CreateRoomSchema.safeParse(req.body)
    if(!data.success){
        res.status(400).json({
            msg:"Invalid data",
        })
        return;
    }
})

app.listen(3001,()=>{
    console.log(`Server is running on port 3001`)
})