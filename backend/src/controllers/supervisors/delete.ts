import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteSupervisor = (req : Request, res : Response, 
    next : NextFunction) => {

        const { userID } = req.params

        const validationSchema = Joi.object({
            userID : Joi.string().required()
        })

        const handler = async () => {
            const result = await supervisorSchema.deleteOne(
                {
                    userID : userID
                }
            )
            result.deletedCount ?
            res.status(200).json("user deleted successfully") :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {deleteSupervisor}