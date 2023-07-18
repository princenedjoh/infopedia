import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import branchSchema from "../../models/branchModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getBranch = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await branchSchema.findOne(
                {
                    _id : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("branch not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllBranch = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await branchSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getBranch, getAllBranch}