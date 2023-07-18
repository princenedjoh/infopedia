import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import flagsSchema from '../../models/flagsModel'
import requestMiddleware from "../../middleware/requestMiddleware"

const addQuestions = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            questionID,
            userID,
            issue,
            suggestedAnswer,
            comment,
            resolved,
            EditorID,
        } = req.body

        const validationSchema = Joi.object({
            questionID : Joi.string().required(),
            userID : Joi.string().required(),
            issue : Joi.string().required(),
            suggestedAnswer : Joi.string().required(),
            comment : Joi.string(),
            resolved : Joi.string(),
            EditorID : Joi.string()
        })

        const handler = async () => {
            const result = await flagsSchema.create({
                questionID : questionID,
                userID : userID,
                issue : issue,
                suggestedAnswer : suggestedAnswer,
                comment : comment,
                resolved : resolved,
                EditorID : EditorID,
            })
            res.status(200).json("flag added succesfully")
        }
        requestMiddleware(req, res, next, handler, validationSchema)
}

export default addQuestions