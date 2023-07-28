import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import userSchema from '../../models/usersModel'
import requestMiddleware from "../../middleware/requestMiddleware"

const addUser = (req : Request, res : Response, 
    next : NextFunction) => {
        const {
            firstName,
            lastName,
            password,
            email,
            gender,
            profilePicture
        } = req.body

        const validationSchema = Joi.object({
            firstName : Joi.string().required(),
            lastName : Joi.string().required(),
            password : Joi.string().required(),
            email : Joi.string().email().required(),
            gender : Joi.string().required(),
            profilePicture : Joi.string()
        })

        const handler = async () => {
            const isEmail = await userSchema.findOne({
                email : email
            })

            if(isEmail){
                return (res.status(409).json("email already used"))
            }
            const result = await userSchema.create({
                firstName :  firstName,
                lastName : lastName,
                password : password,
                email : email,
                gender : gender,
                dateCreated : new Date(),
                profilePicture : profilePicture
            })
            res.status(200).json("user added succesfully")
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addUser }