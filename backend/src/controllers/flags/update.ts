import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import flagSchema from "../../models/flagsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getUser = (req : Request, res : Response, 
    next : NextFunction) => {

        const {
            id,
            questionID,
            userID,
            issue,
            suggestedAnswer,
            comment,
            resolved,
            EditorID,
        } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required(),
            questionID : Joi.string(),
            userID : Joi.string(),
            issue : Joi.string(),
            suggestedAnswer : Joi.string(),
            comment : Joi.string(),
            resolved : Joi.string(),
            EditorID : Joi.string()
        })

        const handler = async () => {
            const result = await flagSchema.findOne(
                {
                    _id : id
                },
                {
                    $set : {
                        questionID : questionID,
                        userID : userID,
                        issue : issue,
                        suggestedAnswer : suggestedAnswer,
                        comment : comment,
                        resolved : resolved,
                        EditorID : EditorID,
                    }
                }
            )
            result ?
            res.status(200).json("flag successfully updated") :
            res.status(404).json("flag not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default getUser