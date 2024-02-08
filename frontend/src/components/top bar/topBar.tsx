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
import { AppTypography, Clickable, ClickableTab, Flex } from '../../styles/global'
import theme from '../../styles/theme'
import { minimumWidth } from '../../utils/types'
import { HiFire } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import Chip from '@mui/material/Chip';
import Input from '../../components/UI/input/input'
import { FiSearch } from "react-icons/fi";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import SwipeableTemporaryDrawer from './components/drawer'
import { GoHomeFill } from "react-icons/go";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { HiTrophy } from "react-icons/hi2";
import { AiFillSafetyCertificate } from "react-icons/ai";

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
    const [searchValue, setSearchValue] = useState('')
    const [program, setProgram] = useState('Compuer Science')
    const [profileClick, setProfileClick] = useState(false)
    const [courseVisibility, setCourseVisibility] = useState(false)
    const handleLogout = () => {
        cookie.remove("jwtToken")
        navigate("/auth/login")

    }
    const location = useLocation().pathname
    const [navigations, setNavigation] = useState([
        {
            name : 'Home',
            route : '/',
            active : false,
            icon : GoHomeFill
        },
        {
            name : 'Questions',
            route : '/questions',
            active : false,
            icon : RiQuestionAnswerFill
        },
        {
            name : 'Challenges',
            route : '/challenges',
            active : false,
            icon : HiTrophy
        },
        {
            name : 'Test',
            route : '/test/testconfig',
            active : false,
            icon : AiFillSafetyCertificate
        }
    ])

    const getCurrentTab = () => {
        const locationSplit = location.split('/')
        return locationSplit[1]
    }

    const setActiveTab = () => {
        const currentTab = getCurrentTab().toLowerCase()
        let navigationsCopy = navigations
        for(let navigation of navigationsCopy){
            currentTab === "" 
                ? navigation.name.toLowerCase() === 'home'
                ? navigation.active = true
                : navigation.active = false
                : navigation.name.toLowerCase() === currentTab
                    ? navigation.active = true
                    : navigation.active = false
        }
        setNavigation([...navigationsCopy])
    }

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

    const handleChangeCourse = (name : string) => {
        setCourseVisibility(false)
        setProgram(name)
    }

    useEffect(()=>{
        setActiveTab()
    },[location])

  return (
    <>
        <ToastContainer/>
      <topBarStyle.Main>
        <Flex 
            width={`${minimumWidth}px`} 
            align='center' 
            justify='space-between'>
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
                                        active={navigationMap.active}>
                                        <navigationMap.icon/>
                                        <AppTypography
                                            textColor={navigationMap.active ? theme.colors2.shades.white : 'inherit'}
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
            <ClickAwayListener onClickAway={()=>setCourseVisibility(false)}>
                <Flex gap={10} width='fit-content' align='center'>
                    <Flex width='fit-content' direction='column' gap={20} position='relative'>
                        <Chip 
                            size='small'
                            onClick={()=>{setCourseVisibility(!courseVisibility)}}
                            deleteIcon={<IoMdArrowDropdown />} 
                            onDelete={()=>{}}
                            label={
                            <AppTypography
                                textColor={theme.colors2.gray.gray2}
                            >
                                {program}
                            </AppTypography>
                            } 
                        />
                        <topBarStyle.CourseSearch
                            visible={courseVisibility}
                        >
                            <AppTypography>
                                Programs
                            </AppTypography>
                            <Input
                                PreIcon={FiSearch}
                                value={searchValue}
                                setState={setSearchValue}
                                background={`${theme.colors2.gray.gray6}80`}
                                border='none'
                                type='text'
                                placeholder='Search Programs'
                            />
                            <Flex direction='column' gap={0.1}>
                                {
                                    [1,2,3,4,5,6,7,8,9,1,2,3,4].map((result, index : number) => {
                                        return (
                                            <ClickableTab
                                                key={index}
                                                onClick={()=>handleChangeCourse('program')}
                                                radius='5px'
                                                padding='10px 10px'
                                                style={{
                                                    width : '100%'
                                                }}
                                            >
                                                <AppTypography
                                                    textColor={theme.colors2.gray.gray3}
                                                >
                                                    program
                                                </AppTypography>
                                            </ClickableTab>
                                        )
                                    })
                                }
                            </Flex>
                        </topBarStyle.CourseSearch>
                    </Flex>
                    <Flex width='fit-content'>
                        <Badge count={5} dot={true} color={theme.colors2.main.primary}>
                            <ClickableTab 
                                padding='7px'
                                onClick={()=>navigate('/notification')}>
                                <FaBell 
                                    color={theme.colors2.main.primary}
                                    size={'15px'}
                                />
                            </ClickableTab>
                        </Badge>
                    </Flex>
                    <Flex width='fit-content' margin='-2px 0 0 0'>
                        <Badge count={100} size='small' color={theme.colors2.main.primary}>
                            <ClickableTab padding='7px'>
                                <HiFire 
                                    color={theme.colors2.main.primary}
                                    size={'18px'}
                                />
                            </ClickableTab>
                        </Badge>
                    </Flex>
                    <Flex width='fit-content'>
                        <SwipeableTemporaryDrawer>
                            <ClickableTab padding='7px'>
                                < RiMapPinUserFill
                                    color={theme.colors2.gray.gray3}
                                    size={'18px'}
                                />
                            </ClickableTab>
                        </SwipeableTemporaryDrawer>
                    </Flex>
                </Flex>
            </ClickAwayListener>
        </Flex>
      </topBarStyle.Main>
      <Outlet/>
    </>
  )
}

export default TopBar
