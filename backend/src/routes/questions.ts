import { Router } from "express";
import addQuestions from "../controllers/questions/addQuestions";
import {getAllQuestions, getQuestion} from "../controllers/questions/getQuestions";
import deleteQuestion from "../controllers/questions/deleteQuestion"
import { authorization } from "../../src/auth/authorization";

export const questionsRoute = Router()

questionsRoute.post('/add', authorization, addQuestions)
questionsRoute.get('/getAll', getAllQuestions)
questionsRoute.get('/getQuestion', getQuestion)
questionsRoute.delete('/delete', deleteQuestion)