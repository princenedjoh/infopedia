import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import questionsModel from "../../models/questionsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getAllQuestions = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({

        })

        const handler = async () => {
            const result = await questionsModel.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getQuestion = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id, coursesID } = req.query

        const validationSchema = Joi.object({
            id : Joi.string(),
            coursesID : Joi.array().items(Joi.string())
        })

        const handler = async () => {
            const result = await questionsModel.find(
                {
                    $or : [
                        {_id : id},
                        {
                            coursesID : {
                                $in : [coursesID]
                            }
                        }
                    ]
                }
            )
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getAllQuestions, getQuestion}