import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import moderatorSchema from "../../models/moderatorModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addAdmin = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            userID
        } = req.body

        const validationSchema = Joi.object({
            userID : Joi.string().required()
        })

        const handler = async () => {

            const isSupervisor = await supervisorSchema.findOne(
                {
                    userID : userID
                }
            )

            const isAdmin = await adminSchema.findOne(
                {
                    userID : userID
                }
            )

            const isModerator = await moderatorSchema.findOne(
                {
                    userID : userID
                }
            )

            if(!isSupervisor && !isAdmin && !isModerator){
                const result = await adminSchema.create({
                    userID : userID
                })
                res.status(200).json("admin added succesfully")
            }
            else{
                res.status(404).json("user already has elevated privilages")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {addAdmin}