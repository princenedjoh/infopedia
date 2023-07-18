import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getUser = (req : Request, res : Response, 
    next : NextFunction) => {

        const {
            id,
            courseName,
            programID
        } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required(),
            courseName : Joi.string(),
            programID : Joi.string()
        })

        const handler = async () => {
            const result = await courseSchema.findOne(
                {
                    _id : id
                },
                {
                    $set : {
                        courseName : courseName
                    }
                }
            )
            result ?
            res.status(200).json("course successfully updated") :
            res.status(404).json("course not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default getUser