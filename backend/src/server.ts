// import express from 'express'
// import cors from 'cors'
const express = require ("express")
const cors = require ("cors")
const dotenv = require("dotenv")
import mongoose, { ConnectOptions } from 'mongoose'

const result = dotenv.config()
const dbconnection = () =>  mongoose.connect("mongodb://127.0.0.1:27017/infopediaDB",
)
try {
    dbconnection()
    console.log("Successfully connected to database")
} catch (error) {
    console.log(error)
    dbconnection()
}

export const app = express()

app.use(cors({
    // origin: 'http://localhost:3001',
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



//error handler
// app.use((err, req, res, next) => errorhandler(err, req, res, next))





const port = process.env.PORT || 3001
app.listen(port, ()=>{console.log(`🌏 Listening at port ${port}`)})