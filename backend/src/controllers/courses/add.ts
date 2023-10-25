import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import programSchema from "../../models/programsModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addCourse = (req : Request, res : Response, 
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
            const isProgram = await programSchema.findOne(
                {
                    _id : programID
                }
            )

            if(!iscourse){
                if(isProgram){
                    const result = await courseSchema.create({
                        courseName : courseName,
                        programID : programID
                    })
                    res.status(200).json("course added succesfully")
                }
                else{
                    res.status(404).json("No such program Available")
                }
            }
            else{
                res.status(404).json("course already exists")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addCourse }