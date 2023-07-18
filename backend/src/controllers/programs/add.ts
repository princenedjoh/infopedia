import { Response, NextFunction } from "express"
import Joi from "joi"
import programSchema from "../../models/programsModel"
import adminSchema from "../../models/administratorModel"
import supervisorSchema from "../../models/supervisorsModel"
import { jwtUserInterface } from "../../auth/authorization"
import requestMiddleware from "../../middleware/requestMiddleware"

const addProgram = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {
        const {
            programName,
            branchID
        } = req.body

        const validationSchema = Joi.object({
            programName : Joi.string().required(),
            branchID : Joi.string().required()
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
                    const isProgram = await programSchema.findOne(
                        {
                            programName : programName
                        }
                    )
        
                    if(!isProgram){
                        const result = await programSchema.create({
                            programName : programName
                        })
                        res.status(200).json("program added succesfully")
                    }
                    else{
                        res.status(404).json({
                            url : "src/controllers/programs/add",
                            message : "program already exists"
                        })
                    }
                }
            }
            else{
                res.status(500).json(
                    {
                        url : "src/controllers/programs/add",
                        message : "internal server error"
                    }
                ) 
            }

        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export { addProgram }