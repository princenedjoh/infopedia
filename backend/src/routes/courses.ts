import { Router } from "express";
import { authentication } from "../auth/authentication";
import { addCourse } from "../controllers/courses/add"
import { getcourse, getAllcourse } from "../controllers/courses/get"
import { updateCourse } from "../controllers/courses/update"
import { deletecourse } from "../controllers/courses/delete"

export const courseRoute = Router()

courseRoute.post('/add', addCourse)
courseRoute.get('/getCourse', getcourse)
courseRoute.get('/getAllCourses', getAllcourse)
courseRoute.patch('/update', updateCourse)
courseRoute.delete('/delete', deletecourse)