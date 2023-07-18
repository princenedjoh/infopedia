import { Router } from "express";
import { authorization } from "../../src/auth/authorization";
import { addProgram } from "../controllers/programs/add"
import { getAllPrograms, getProgram } from '../controllers/programs/get'
import { updateProgram } from "../controllers/programs/update"
import { deleteProgram } from "../controllers/programs/delete"

export const programRoute = Router()

programRoute.post('/add', authorization, addProgram)
programRoute.get('/getProgram', getProgram)
programRoute.get('/getAllPrograms', getAllPrograms)
programRoute.patch('/update', authorization, updateProgram)
programRoute.delete('/delete', deleteProgram)
