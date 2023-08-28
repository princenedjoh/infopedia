import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import topicSchema from "../../models/topicsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteTopic = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await topicSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("topic deleted successfully") :
            res.status(404).json("topic not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {deleteTopic}