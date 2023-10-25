import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import questionsModel from "../../models/questionsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteQuestion = (req : Request, res : Response, 
    next : NextFunction) => {
        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await questionsModel.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount > 0 ?
            res.status(200).json(" Question deleted successfully") :
            res.status(404).json("No such question")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default deleteQuestion