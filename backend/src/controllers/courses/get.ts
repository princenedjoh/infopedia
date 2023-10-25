import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import courseSchema from "../../models/coursesModel"
import requestMiddleware from "../../middleware/requestMiddleware"

const getcourse = (req : Request, res : Response, 
    next : NextFunction) => {

        const { id, courseName } = req.query

        const validationSchema = Joi.object({
            id : Joi.string(),
            courseName : Joi.string()
        })

        const handler = async () => {
            if(id){
                const result = await courseSchema.find(
                    {
                        $or : [
                            {_id : id}
                        ]
                    }
                )
                result ?
                res.status(200).json(result) :
                res.status(404).json("course not found")
            }
            else{
                const result = await courseSchema.find(
                    {
                        $or : [
                            {courseName : {
                                $regex : courseName || "!@%^~(&%@!~%!&&!GF567898iwe8823*(^$^&)#{|}{}?><>!@1356bnvnn   F",
                                $options : 'i'
                            }}
                        ]
                    }
                )
                result ?
                res.status(200).json(result) :
                res.status(404).json("course not found")
            }
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

const getAllcourse = (req : Request, res : Response, 
    next : NextFunction) => {

        const validationSchema = Joi.object({
        })

        const handler = async () => {
            const result = await courseSchema.find()
            res.status(200).json(result)
        }

        requestMiddleware(req, res, next, handler, validationSchema)
}

export {getcourse, getAllcourse}