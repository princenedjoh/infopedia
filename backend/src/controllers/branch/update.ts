import { Response, NextFunction } from "express"
import Joi from "joi"
import branchSchema from "../../models/branchModel"
import adminSchema from "../../models/administratorModel"
import { jwtUserInterface } from "../../auth/authorization"
import requestMiddleware from "../../middleware/requestMiddleware"

const updateBranch = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {

        const {
            branchID,
            branchName
        } = req.body

        const validationSchema = Joi.object({
            branchID : Joi.string().required(),
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
                    const result = await branchSchema.updateOne(
                        {
                            _id : branchID
                        },
                        {
                            $set : {
                                branchName : branchName
                            }
                        }
                    )
                    result ?
                    res.status(200).json("branch successfully updated") :
                    res.status(404).json("branch not found")
                }
                else{
                    res.status(401).json(
                        "user is unauthorized to make updates to the branch"
                    )
                }
            }
            else{
                res.status(500).json({
                    "controller" : "branch/update",
                    "message" : "internal server error"
                })
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export{ updateBranch }