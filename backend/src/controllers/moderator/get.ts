import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import moderatorSchema from "../../models/moderatorModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getModerator = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await moderatorSchema.findOne(
                {
                    userID : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default getModerator