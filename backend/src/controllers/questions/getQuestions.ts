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

export default getAllQuestions