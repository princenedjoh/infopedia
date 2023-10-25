import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import adminSchema from "../../models/administratorModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteAdmin = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await adminSchema.deleteOne(
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

export {deleteAdmin}