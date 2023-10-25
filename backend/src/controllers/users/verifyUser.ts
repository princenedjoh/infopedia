import { Response, NextFunction } from "express"
import { jwtUserInterface } from "../../auth/authorization"
import Joi from "joi"
import requestMiddleware from "../../middleware/requestMiddleware"

const VerifyUser = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        
        })
        const handler = async () => {
            res.status(200).json("user is verified")
        }

        requestMiddleware(req, res, next, handler, validationSchema)

}

export { VerifyUser }