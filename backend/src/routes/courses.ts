import { Router } from "express";
import { authentication } from "../auth/authentication";

export const courseRoute = Router()

courseRoute.post('/add', authentication)