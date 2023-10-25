import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import testHistorySchema from "../../models/testHistoryModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getTestHistoryByUserID = (req : Request, res : Response, 
    next : NextFunction) => {

        const { userID } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await testHistorySchema.find(
                {
                    userID : userID
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("testHistory not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}


const getTestHistory = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await testHistorySchema.findOne(
                {
                    userID : id
                }
            )
            result ?
            res.status(200).json(result) :
            res.status(404).json("testHistory not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAlltestHistory = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await testHistorySchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getTestHistory, getAlltestHistory, getTestHistoryByUserID}