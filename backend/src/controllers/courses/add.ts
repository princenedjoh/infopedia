import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addcourse = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            courseName,
            programID
        } = req.body

        const validationSchema = Joi.object({
            courseName : Joi.string().required(),
            programID : Joi.string().required()
        })

        const handler = async () => {

            const iscourse = await courseSchema.findOne(
                {
                    courseName : courseName
                }
            )

            if(!iscourse){
                const result = await courseSchema.create({
                    courseName : courseName
                })
                res.status(200).json("course added succesfully")
            }
            else{
                res.status(404).json("course already exists")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addcourse }