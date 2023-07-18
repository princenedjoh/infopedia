import { Router } from "express";
import { authentication } from "../auth/authentication";

export const authRoute = Router()

authRoute.post('/login', authentication)