import * as topBarStyle from './topBar.styled'
import {logos} from '../../assets/index'
import { IoSearch } from 'react-icons/io5'
import { RiMapPinUserFill } from 'react-icons/ri'
import { useState, useEffect, Fragment, useContext } from 'react'
import { Outlet } from 'react-router'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Divider, Badge } from 'antd';
import './customStyles.css'
import { BiSolidUser } from 'react-icons/bi'
import { FaBell, FaPowerOff } from 'react-icons/fa'
import Cookies from "universal-cookie"
import { BASE_URL } from '../../variables/variables'
import axios from "axios"
import Context from '../../context/context'
import { ToastContainer } from 'react-toastify'
import { AppTypography, Flex } from '../../styles/global'
import theme from '../../styles/theme'
import { minimumWidth } from '../../utils/types'
import { HiFire } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import Chip from '@mui/material/Chip';

const cookie = new Cookies()

export const LogoText = () => {
    return (
        <>
            <topBarStyle.LogoText>
                PrepRoom
            </topBarStyle.LogoText>
        </>
    )
}

const TopBar = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        cookie.remove("jwtToken")
        navigate("/auth/login")

    }
    const location = useLocation().pathname.toString()
    useEffect(()=>{
        navigationClick()
    },[location])
    const questionRegex = /^\/questions/;
    const homeRegex = /^\/home/;
    const aboutRegex = /^\/about/;
    const isQuestionRoute = () => {
        if(location.match(questionRegex) !== null)
            return true
            return false
    }
    const isHomeRoute = () => {
        if(location.match(homeRegex) !== null)
            return true
            return false
    }
    const isAboutRoute = () => {
        if(location.match(aboutRegex) !== null)
            return true
            return false
    }
    const questionRoute = isQuestionRoute()
    const [navigations, setNavigation] = useState([
        {
            name : 'Home',
            route : '/',
            active : false
        },
        {
            name : 'Questions',
            route : '/questions',
            active : false
        },
        {
            name : 'About',
            route : '/about',
            active : false
        }
    ])

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <topBarStyle.Menu>
                <BiSolidUser
                    size={"14px"}
                    opacity={0.6}
                />
                <Link to={"/auth/login"}>
                    Sign In
                </Link>
            </topBarStyle.Menu>
          ),
        },
        {
            key: '2',
            label: (
                <hr/>
            ),
          },
        {
            key: '3',
            label: (
                <topBarStyle.Menu
                    onClick={(()=>handleLogout())}
                >
                    <FaPowerOff
                        size={"14px"}
                        opacity={0.6}
                    />
                    <div>
                        Logout
                    </div>
                </topBarStyle.Menu>
            ),
          }
    ]

    const [themeSwitcher, setThemeSwitcher] = useState(false)

    const isLoggedIn = async () => {
        const getCookie = cookie.get("jwtToken")
        if(cookie){
            const isVerified = await axios.get(`${BASE_URL}/users/verifyUser`)
            if(isVerified.status === 200){
                return true
            }
            return false
        }
        return false
    }

    const menuItemsShow = () => {
        const isUserLoggedIn = isLoggedIn()
    }

    const navigationClick = () => {
        const navigationsCopy = navigations
        for(const i of navigationsCopy){
            if(i.name === "About"){
                if(isAboutRoute()){
                    i.active = true
                }else{
                    i.active = false
                }
            }
            if(i.name === "Home"){
                if(isHomeRoute()){
                    i.active = true
                }else{
                    i.active = false
                }
            }
            if(i.name === "Questions"){
                if(isQuestionRoute()){
                    i.active = true
                }else{
                    i.active = false
                }
            }
        }
        setNavigation([...navigationsCopy])
    }

  return (
    <>
        <ToastContainer/>
      <topBarStyle.Main>
        <Flex width={`${minimumWidth}px`} align='center' justify='space-between'>
            <Flex width='fit-content'>
                <topBarStyle.Logo>
                    <topBarStyle.LogoImg src = {logos.logoMark}/>
                </topBarStyle.Logo>
                <topBarStyle.Navigation>
                    {
                        navigations.map((navigationMap, index : number) => {
                            return(
                                <Link 
                                    to={navigationMap.route}
                                    key={index}
                                >
                                    <topBarStyle.NavigationContainer
                                        active={navigations[index].active}>
                                        <AppTypography
                                            textColor={navigations[index].active ? theme.colors2.shades.white : 'inherit'}
                                        >
                                            {navigationMap.name}
                                        </AppTypography>
                                    </topBarStyle.NavigationContainer>
                                </Link>
                            )
                        })
                    }
                </topBarStyle.Navigation>
            </Flex>
            <Flex gap={20} width='fit-content' align='center'>
                <Chip 
                    size='small'
                    onClick={()=>{}}
                    deleteIcon={<IoMdArrowDropdown />} 
                    onDelete={()=>{}}
                    label={
                    <AppTypography
                        textColor={theme.colors2.gray.gray3}
                    >
                        Computer Science
                    </AppTypography>
                    } 
                />
                <Flex width='fit-content' margin='1px 0 0 0'>
                    <Badge count={5} dot={true} color={theme.colors2.main.primary}>
                        <FaBell 
                            color={theme.colors2.gray.gray4}
                            size={'15px'}
                        />
                    </Badge>
                </Flex>
                <HiFire 
                    color={theme.colors2.main.primary}
                    size={'18px'}
                />
                <topBarStyle.Profile>
                    <div
                        style={{marginTop : '2px'}}
                        onClick={()=>menuItemsShow()}
                    >
                        <Dropdown menu={{ items }} placement="bottomRight" arrow>
                            < RiMapPinUserFill
                                color={theme.colors2.gray.gray4}
                                size={'18px'}
                            />
                        </Dropdown>
                    </div>
                </topBarStyle.Profile>
            </Flex>
        </Flex>
      </topBarStyle.Main>
      <Outlet/>
    </>
  )
}

export default TopBar
