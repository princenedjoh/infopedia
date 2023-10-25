import { Router } from "express";
import { addAdmin } from "../controllers/administrator/add"
import { getAdmin, getAllAdmin } from "../controllers/administrator/get"
import { deleteAdmin } from "../controllers/administrator/delete"

export const adminRoute = Router()

adminRoute.post('/add', addAdmin)
adminRoute.get('/getAdmin', getAdmin)
adminRoute.get('/getAllAdmin', getAllAdmin)
adminRoute.delete('/delete', deleteAdmin)