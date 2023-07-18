// import express from 'express'
// import cors from 'cors'
const express = require ("express")
const cors = require ("cors")
const dotenv = require("dotenv")
import {
    RequestHandler, Request, Response, NextFunction
  } from "express"
import Joi from 'joi';
import { errorType } from "./src/middleware/erroHandler"
import errorhandler from "./src/middleware/erroHandler"
import requestMiddleware from "./src/middleware/requestMiddleware"
import mongoose, { ConnectOptions } from 'mongoose'
import { questionsRoute } from "./src/routes/questions";
import { userRoute } from "./src/routes/users"
import { authRoute } from "./src/routes/auth"
import { adminRoute } from "./src/routes/admin"
import { branchRoute } from "./src/routes/branch"
import { courseRoute } from "./src/routes/courses"
import { programRoute } from "./src/routes/programs"

const result = dotenv.config()
const dbconnection = () =>  mongoose.connect("mongodb://127.0.0.1:27017/infopediaDB",
)
try {
    dbconnection()
    console.log("Successfully connected to database")
} catch (error) {
    console.log(error)
}

export const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/questions', questionsRoute)
app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/admin', adminRoute)
app.use('/branch', branchRoute)
app.use('/courses', courseRoute)
app.use('/programs', programRoute)


// request middleWare
app.use((req : Request, res: Response, next : NextFunction, 
    handler : RequestHandler, validation : Joi.ObjectSchema)=> 
    requestMiddleware(req, res, next, handler, validation))
// error handler
app.use((err : errorType, req : Request, res : Response, next : NextFunction) => errorhandler(err, req, res, next))





const port = process.env.PORT || 3001
app.listen(port, ()=>{console.log(`🌏 Listening at port ${port}`)})