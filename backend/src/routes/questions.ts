import { Router } from "express";
import addQuestions from "../controllers/questions/addQuestions";
import getAllQuestions from "../controllers/questions/getQuestions";
import deleteQuestion from "../controllers/questions/deleteQuestion"

export const questionsRoute = Router()

questionsRoute.post('/add', addQuestions)
questionsRoute.get('/getAll', getAllQuestions)
questionsRoute.delete('/delete', deleteQuestion)