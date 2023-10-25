import { Response, NextFunction } from "express"
import Joi from "joi"
import programSchema from "../../models/programsModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import { jwtUserInterface } from "../../auth/authorization"
import requestMiddleware from "../../middleware/requestMiddleware"

const updateProgram = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {

        const {
            id,
            programName,
            branchID
        } = req.body

        const validationSchema = Joi.object({
            id : Joi.string().required(),
            programName : Joi.string(),
            branchID : Joi.string()
        })

        const handler = async () => {
            if(typeof(req.jwtUser) === "object"){
                const userID = req.jwtUser.userID
                const isAdmin = await adminSchema.findOne(
                    {
                        userID : userID
                    }
                )
                const isSupervisor = await supervisorSchema.findOne(
                    {
                        userID : userID
                    }
                )
                if(isAdmin || isSupervisor){
                    const result = await programSchema.updateOne(
                        {
                            _id : id
                        },
                        {
                            $set : {
                                programName : programName,
                                branchID : branchID
                            }
                        }
                    )
                    result ?
                    res.status(200).json("program successfully updated") :
                    res.status(404).json("program not found")
                }
                else{
                    res.status(404).json({
                        url : "src/controllers/programs/update",
                        message : "user is not authorized to update the program"
                    })
                }
            }
            else{
                res.status(500).json(
                    {
                        url : "src/controllers/programs/update",
                        message : "internal server error"
                    }
                ) 
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {updateProgram}