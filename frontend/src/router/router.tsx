import { Routes, Route } from "react-router-dom"
import SignUp from "../pages/signUp/signUp"
import Home from "../pages/home/home"
import TopBar from "../components/top bar/topBar"
import SideBar from "../components/sidebar/sideBar"
import About from "../pages/about/about"
import Questions from "../pages/questions/questions"
import Login from "../pages/login/login"
import Pod from "../pages/pod/pod"
import TestConfig from "../pages/test/pages/testConfig/testConfig"
import Notification from "../pages/notification/notification"

const authRoutes = [
    {
        path : '/auth/login',
        route : Login
    },
    {
        path : '/auth/signup',
        route : SignUp
    }
]

const questionsRoute = [
    {
        path : '/questions/:courseID',
        route : Questions
    }
]

export const navRoutes = [
    {
        name : 'home',
        path : '/',
        route : Home
    },
    {
        name : 'questions',
        path : '/questions',
        route : Questions
    },
    {
        name : 'POD',
        path : '/pod',
        route : Pod
    },
    {
        name : 'test',
        path : '/test/testconfig',
        route : TestConfig
    },
    {
        name : 'notification',
        path : '/notification',
        route : Notification
    },
]

const Router = () => {
    return(
        <Routes>
            <Route path={'/'} element={<TopBar />}>
                {
                    navRoutes.map((path, index : number)=>{
                        return(
                            <Route key={index} path={path.path} element={<path.route />} />
                            
                        )
                    })
                }
                {
                    authRoutes.map((path, index : number)=>{
                        return(
                            <Route key={index} path={path.path} element={<path.route />} />
                        )
                    })
                }
            </Route>
        </Routes>
    )
}

export default Router