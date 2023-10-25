import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import userSchema from "../../models/usersModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const updateUser = (req : Request, res : Response, 
    next : NextFunction) => {

        const {
            id,
            firstName,
            lastName,
            password,
            email,
            gender,
            profilePicture
        } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required(),
            firstName : Joi.string(),
            lastName : Joi.string(),
            password : Joi.string(),
            email : Joi.string().email(),
            gender : Joi.string(),
            profilePicture : Joi.string()
        })

        const handler = async () => {
            const result = await userSchema.updateOne(
                {
                    _id : id
                },
                {
                    $set : {
                        firstName : firstName,
                        lastName : lastName,
                        password : password,
                        email : email,
                        gender : gender,
                        profilePicture : profilePicture
                    }
                }
            )
            result ?
            res.status(200).json("user successfully updated") :
            res.status(404).json("user not found")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { updateUser }