import { Response, NextFunction } from "express"
import Joi from "joi"
import branchSchema from "../../models/branchModel"
import adminSchema from "../../models/administratorModel"
import { jwtUserInterface } from "../../auth/authorization"
import requestMiddleware from "../../middleware/requestMiddleware"

const addBranch = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {
        const {
            branchName
        } = req.body

        const validationSchema = Joi.object({
            branchName : Joi.string().required()
        })

        const handler = async () => {
            if(typeof(req.jwtUser) === "object"){
                const userID = req.jwtUser.userID
                const isAdmin = adminSchema.findOne(
                    {
                        userID : userID
                    }
                )
                if(isAdmin){
                    const isBranch = await branchSchema.findOne(
                        {
                            branchName : branchName
                        }
                    )
        
                    if(!isBranch){
                        const result = await branchSchema.create({
                            branchName : branchName
                        })
                        res.status(200).json("branch added succesfully")
                    }
                    else{
                        res.status(404).json("branch already exists")
                    }
                }
                else{
                    res.status(401).json(
                        "user is not authorized to create a branch"
                    )
                }
            }
            else{  
                res.status(500).json(
                    {
                        "controller" : "branch/add",
                        "message" : "internal server error"
                    }
                )  
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {addBranch}