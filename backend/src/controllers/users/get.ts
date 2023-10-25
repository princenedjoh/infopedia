import { Response, NextFunction } from "express"
import Joi from "joi"
import userSchema from '../../models/usersModel'
import requestMiddleware from "../../middleware/requestMiddleware"
import { jwtUserInterface } from "../../../src/auth/authorization"

const getUser = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {
        let userID : unknown;
        if(typeof(req.jwtUser) === "object"){
            userID = req.jwtUser.userID
        }

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await userSchema.find(
                {
                    _id : userID
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllUsers = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        
        })

        const handler = async () => {
            const result = await userSchema.find()
            result ?
            res.status(200).json(result) :
            res.status(404).json("no users found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { getUser, getAllUsers }