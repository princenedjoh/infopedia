import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getSupervisor = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await supervisorSchema.findOne(
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

export default getSupervisor