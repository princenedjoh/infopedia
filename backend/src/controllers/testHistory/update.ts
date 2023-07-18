import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import testHistorySchema from "../../models/testHistoryModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const updateTestHistory = (req : Request, res : Response, 
    next : NextFunction) => {

        const {
            userID,
            questions
        } = req.body

        const validationSchema = Joi.object({
            userID : Joi.string().required(),
            questions : Joi.string().required(),
        })

        const handler = async () => {
            const result = await testHistorySchema.findOne(
                {
                    _id : userID
                },
                {
                    $set : {
                        questions : questions
                    }
                }
            )
            result ?
            res.status(200).json("testHistory successfully updated") :
            res.status(404).json("testHistory not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { updateTestHistory }