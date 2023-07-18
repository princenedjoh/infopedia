import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import testHistorySchema from "../../models/testHistoryModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addtestHistory = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            userID,
            questions
        } = req.body

        const validationSchema = Joi.object({
            userID : Joi.array().required(),
            questions : Joi.array().required()
        })

        const handler = async () => {
            const result = await testHistorySchema.create({
                userID : userID,
                questions : questions
            })
            res.status(200).json("testHistory added succesfully")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addtestHistory }