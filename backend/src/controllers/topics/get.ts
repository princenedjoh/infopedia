import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import topicsSchema from "../../models/topicsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getTopic = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id, name } = req.query

        const validationSchema = Joi.object({
            id : Joi.string(),
            name : Joi.string()
        })

        const handler = async () => {
            const result = await topicsSchema.find(
                {
                    $or : [
                        {_id : id},
                        {name : {
                            $regex : name,
                            $options : 'i'
                        }}
                    ]
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("topic not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllTopics = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await topicsSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getTopic, getAllTopics}