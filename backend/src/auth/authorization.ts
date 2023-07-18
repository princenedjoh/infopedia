import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express"

const accessTokenSecret : string = process.env.ACCESS_TOKEN_SECRET || "altaccesstoken"
export interface jwtUserInterface extends Request {
    jwtUser : JwtPayload | string | undefined
}

//authorization
const authorization = (req : jwtUserInterface, res : Response, 
    next : NextFunction) =>{
    console.log('jwtUser')
    const headers = req.headers
    const cookie = headers.cookie
    const accessToken = cookie ? cookie.split(' ')[1].split('=')[1] : 
    headers?.authorization && headers.authorization.split(' ')[1]
    accessToken ? jwt.verify(accessToken, accessTokenSecret, (err, jwtUser)=>{
        try {
            if(err){
                res.status(401).json({
                    "message" : "unauthorized",
                    "error" : err
                })
            }
            else{
                req.jwtUser = jwtUser
                next()
            }
            
        } catch (error) {
            next(error)
        }
    }) :
    res.status(401).json({
        url : "src/auth/authorization",
        message : "unauthorized"
    })
}

export {authorization}