import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteSupervisor = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.params

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await supervisorSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("user deleted successfully") :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default deleteSupervisor