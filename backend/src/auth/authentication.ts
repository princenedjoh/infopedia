import userSchema from '../models/usersModel'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import Joi from 'joi'
import { Request, Response, NextFunction } from "express"
import requestMiddleware from '../middleware/requestMiddleware'
import { ObjectId } from '../types/types'
dotenv.config()

const schema = Joi.object({
    email : Joi
    .string()
    .email()
    .required(),

    password : Joi
    .string()
    .required()
})

interface jwtUser {
    email : String,
    userID? : ObjectId
}

const requestHandler = async (req : Request, res : Response) =>{
    const {email, password} = req.body
    const jwtUser : jwtUser = {
        email: email
    }
    const user = await userSchema.findOne({
        'email': email,
        'password': password
    })
    if(user){
        jwtUser.userID = user._id
        const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
        res.status(200).json({accessToken: accessToken})
    }
    else{
        res.status(404).json('user not found')
    }
}

const authentication = (req : Request, res : Response, next : NextFunction) =>{
    requestMiddleware(req, res, next, requestHandler, schema)
}

export {authentication}