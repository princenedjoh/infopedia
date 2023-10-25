import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const updateCourse = (req : Request, res : Response, 
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
            const result = await courseSchema.updateMany(
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
            res.status(200).json("course(s) successfully updated") :
            res.status(404).json("course(s) not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {updateCourse}