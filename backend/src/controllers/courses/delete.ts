import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deletecourse = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await courseSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("course deleted successfully") :
            res.status(404).json("course not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {deletecourse}