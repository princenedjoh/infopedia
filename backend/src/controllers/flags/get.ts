import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import flagSchema from "../../models/flagsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getflag = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await flagSchema.findOne(
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

const getAllflags = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await flagSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { getflag, getAllflags }