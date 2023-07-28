import { Routes, Route } from "react-router-dom"
import SignUp from "../pages/signUp/signUp"
import Home from "../pages/home/home"
import TopBar from "../components/top bar/topBar"
import SideBar from "../components/sidebar/sideBar"
import About from "../pages/about/about"
import Questions from "../pages/questions/questions"
import Login from "../pages/login/login"

const standAloneRoute = [
    {
        path : '/',
        route : Home
    },
    {
        path : '/about',
        route : About
    },
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
        path : '/questions',
        route : Questions
    }
]

const Router = () => {
    return(
        <Routes>
                <Route path={'/'} element={<TopBar />}>
                    <Route path={'/questions'} element={<SideBar />}>
                        {
                            questionsRoute.map((path, index : number)=>{
                                return(
                                    <Route key={index} path={path.path} element={<path.route />} />
                                )
                            })
                        }
                    </Route>
                    {
                        standAloneRoute.map((path, index : number)=>{
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