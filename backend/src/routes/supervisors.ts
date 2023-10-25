import { Router } from "express";
import { authorization } from "../../src/auth/authorization";
import { addSupervisor } from "../../src/controllers/supervisors/add"
import { getSupervisor, getAllSupervisors } from "../../src/controllers/supervisors/get"
import { deleteSupervisor } from "../../src/controllers/supervisors/delete"

export const supervisorRoute = Router()

supervisorRoute.post('/add', authorization, addSupervisor)
supervisorRoute.get('getSupervisor', getSupervisor)
supervisorRoute.get('/getAllSupervisors', getAllSupervisors)
supervisorRoute.delete('/delete', authorization, deleteSupervisor)