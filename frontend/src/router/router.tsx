import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/home"
import TopBar from "../components/top bar/topBar"
import SideBar from "../components/sidebar/sideBar"
import About from "../pages/about/about"
import Questions from "../pages/questions/questions"

const standAloneRoute = [
    {
        path : '/',
        route : Home
    },
    {
        path : '/about',
        route : About
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