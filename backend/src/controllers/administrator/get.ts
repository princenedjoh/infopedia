import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import adminSchema from "../../models/administratorModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getAdmin = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await adminSchema.findOne(
                {
                    userID : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllAdmin = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object()

        const handler = async () => {
            const result = await adminSchema.find()
            result ?
            res.status(200).json(result) :
            res.status(404).json("users not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getAdmin, getAllAdmin}