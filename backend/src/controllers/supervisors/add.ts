import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import moderatorSchema from "../../models/moderatorModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const addSupervisor = (req : Request, res : Response, 
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
                    _id : userID
                }
            )

            const isAdmin = await adminSchema.findOne(
                {
                    _id : userID
                }
            )

            const isModerator = await moderatorSchema.findOne(
                {
                    _id : userID
                }
            )

            if(!isSupervisor && !isAdmin && !isModerator){
                const result = await supervisorSchema.create({
                    userID : userID
                })
                res.status(200).json("user added succesfully")
            }
            else{
                res.status(404).json("user not found")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default addSupervisor