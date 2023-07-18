import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getcourse = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await courseSchema.findOne(
                {
                    userID : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("course not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllcourse = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await courseSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getcourse, getAllcourse}