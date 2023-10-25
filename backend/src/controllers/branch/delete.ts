import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import branchSchema from "../../models/branchModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteBranch = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.params

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await branchSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("branch deleted successfully") :
            res.status(404).json("branch not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default deleteBranch