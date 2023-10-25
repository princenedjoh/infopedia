import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import userSchema from "../../models/usersModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const deleteUser = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required()
        })

        const handler = async () => {
            const result = await userSchema.deleteOne(
                {
                    _id : id
                }
            )
            result.deletedCount ?
            res.status(200).json("user deleted successfully") :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {deleteUser}