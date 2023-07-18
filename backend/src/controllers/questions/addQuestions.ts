import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import questionsModel from "../../models/questionsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addQuestions = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            question,
            possibleAnswers,
            answer,
            editorID
        } = req.body

        const validationSchema = Joi.object({
            question : Joi.string().required(),
            possibleAnswers : Joi.array().required(),
            answer : Joi.string().required(),
            editorID : Joi.string().required()
        })

        const handler = async () => {
            const result = await questionsModel.create({
                question :  question,
                possibleAnswers : possibleAnswers,
                answer : answer,
                editorID : editorID
            })
            res.status(200).json("question added succesfully")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default addQuestions