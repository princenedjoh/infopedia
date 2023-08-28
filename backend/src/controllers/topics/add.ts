import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import topicsSchema from "../../models/topicsModel"
import programSchema from "../../models/programsModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addTopic = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            name,
            courseID
        } = req.body

        const validationSchema = Joi.object({
            name : Joi.string().required(),
            courseID : Joi.string().required()
        })

        const handler = async () => {

            const iscourse = await courseSchema.findOne(
                {
                    _id : courseID
                }
            )
            const isTopic = await topicsSchema.findOne(
                {
                    name : name
                }
            )

            if(!isTopic){
                if(iscourse){
                    const result = await topicsSchema.create({
                        name : name,
                        courseID : courseID
                    })
                    res.status(200).json("topic added succesfully")
                }
                else{
                    res.status(404).json("No such course Available")
                }
            }
            else{
                res.status(404).json("topic already exists")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addTopic }