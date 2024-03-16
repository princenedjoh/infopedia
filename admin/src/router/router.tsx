import { Routes, Route } from "react-router-dom"
import Questions from "../pages/questions/questions"
import Home from "../pages/home/home"
import Notification from "../pages/Notification/Notification"
import DefaultRoute from "./default import/defaultRoute"

const questionsRoute = [
    {
        path : '/AddQuestions',
        route : Questions
    }
]

const standAloneRoute = [
    {
        path : '/',
        route : Home
    },
    {
        path : '/notification',
        route : Notification
    },
    {
        path : '/users/administrators',
        route : Notification
    },
    {
        path : '/users/supervisors',
        route : Notification
    },
    {
        path : '/users/moderators',
        route : Notification
    }
]

const Router = () => {
    return(
        <Routes>
                <Route path={'/'} element={<DefaultRoute />}>
                    {
                        questionsRoute.map((path, index : number)=>{
                            return(
                                <Route key={index} path={path.path} element={<path.route />} />
                            )
                        })
                    }
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