import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import questionsModel from "../../models/questionsModel"
import requestMiddleware from "../../middleware/requestMiddleware"
import isProgram from "../../utils/models/isProgram"
import isCourse from "../../utils/models/isCourse"
import isTopic from "../../utils/models/isTopic"
import isUser from "../../utils/models/isUser"
import { jwtUserInterface } from "../../../src/auth/authorization"

const addQuestions = (req : jwtUserInterface, res : Response, 
    next : NextFunction) => {
        const {
            question,
            possibleAnswers,
            answer,
            explanation,
            programsID,
            coursesID,
            topicsID
        } = req.body

        let userID:string
        if(typeof(req.jwtUser) === "object"){
            userID = req.jwtUser.userID
        }

        const validationSchema = Joi.object({
            question : Joi.string().required(),
            possibleAnswers : Joi.array().required(),
            answer : Joi.string().required(),
            programsID : Joi.array().items(Joi.string()).required(),
            coursesID : Joi.array().items(Joi.string()).required(),
            topicsID : Joi.array().items(Joi.string()).required(),
            explanation : Joi.string()
        })

        
        const handler = async () => {
            for(let i in programsID){
                let program = await isProgram(programsID[i])
                if(!program)
                return res.status(400).json(
                    {
                        url : "src/controllers/questions/addQuestion",
                        error : "no such programID"
                    }
                )
            }
    
            for(let i in coursesID){
                let course = await isCourse(coursesID[i])
                if(!course)
                return res.status(400).json(
                    {
                        url : "src/controllers/questions/addQuestion",
                        error : "no such courseID"
                    }
                )
            }
    
            for(let i in topicsID){
                let topic = await isTopic(topicsID[i])
                if(!topic)
                return res.status(400).json(
                    {
                        url : "src/controllers/questions/addQuestion",
                        error : "no such topicID"
                    }
                )
            }

            const result = await questionsModel.create({
                question, possibleAnswers, answer, editorID : userID, 
                programsID, coursesID, topicsID, explanation
            })
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export default addQuestions