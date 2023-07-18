import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import userSchema from '../../models/usersModel'
import requestMiddleware from "../../middleware/requestMiddleware"

const getUser = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await userSchema.find(
                {
                    _id : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllUsers = (req : Request, res : Response, 
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