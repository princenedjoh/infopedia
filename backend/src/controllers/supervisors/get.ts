import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getSupervisor = (req : Request, res : Response, 
    next : NextFunction) => {

        const { userID } = req.body

        const validationSchema = Joi.object({
            userID : Joi.string().required()
        })

        const handler = async () => {
            const result = await supervisorSchema.findOne(
                {
                    userID : userID
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllSupervisors = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
            
        })

        const handler = async () => {
            const result = await supervisorSchema.find()
            result ?
            res.status(200).json(result) :
            res.status(404).json("users not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getSupervisor, getAllSupervisors}