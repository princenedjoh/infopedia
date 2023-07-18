import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import testHistorySchema from "../../models/testHistoryModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deletetestHistory = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.params

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await testHistorySchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("testHistory deleted successfully") :
            res.status(404).json("testHistory not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default deletetestHistory