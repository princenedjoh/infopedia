import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import flagSchema from "../../models/flagsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteflag = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.params

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await flagSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("flag deleted successfully") :
            res.status(404).json("flag not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default deleteflag