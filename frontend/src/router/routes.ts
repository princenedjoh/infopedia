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

export const routes = [
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
    {
        path : '/auth/login',
        route : Login
    },
    {
        path : '/auth/signup',
        route : SignUp
    }
]