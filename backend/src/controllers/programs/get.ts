import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import programSchema from "../../models/programsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getProgram = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await programSchema.findOne(
                {
                    _id : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("program not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllPrograms = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await programSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getProgram, getAllPrograms}