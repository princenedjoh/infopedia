import { Router } from "express";
import { authorization } from "../auth/authorization";
import { addBranch }  from "../controllers/branch/add"
import { getBranch, getAllBranch } from "../controllers/branch/get"
import { updateBranch } from "../controllers/branch/update"

export const branchRoute = Router()

branchRoute.post('/add', authorization, addBranch)
branchRoute.get('/getBranch', getBranch)
branchRoute.get('/getAllBranches', getAllBranch)
branchRoute.patch('/update', authorization, updateBranch)