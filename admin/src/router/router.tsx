import { Routes, Route } from "react-router-dom"
import TopBar from "../components/top bar/topBar"
import SideBar from "../components/sidebar/sideBar"
import Questions from "../pages/questions/questions"
import Home from "../pages/home/home"
import { Outlet } from 'react-router'
import * as routerStyle from './router.style'
import { Fragment, useState } from "react"
import Notification from "../pages/Notification/Notification"

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
    }
]

const DefaultRoute = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewPortheight, setViewPortheight] = useState(window.innerHeight);

    return(
        <routerStyle.Main>
            <TopBar/>
            <routerStyle.Outlet>
                <Outlet/>
            </routerStyle.Outlet>
            <SideBar/>
        </routerStyle.Main>
    )
}

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