import * as topBarStyle from './topBar.styled'
import svgs from '../../assets/index'
import { IoSearch } from 'react-icons/io5'
import { RiMapPinUserFill } from 'react-icons/ri'
import { useState, useEffect, Fragment } from 'react'
import { Outlet } from 'react-router'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Divider } from 'antd';
import './customStyles.css'
import { BiSolidUser } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import Cookies from "universal-cookie"
import { BASE_URL } from '../../variables/variables'
import axios from "axios"

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
    const location = useLocation().pathname
    const [navigations, setNavigation] = useState([
        {
            name : 'Home',
            route : '/',
            active : location == '/' ? true : false
        },
        {
            name : 'Questions',
            route : '/questions',
            active : location == '/questions' ? true : false
        },
        {
            name : 'About',
            route : '/about',
            active : location == '/about' ? true : false
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

    useEffect(()=>{
        const navigationsCopy = navigations
        for(const i in navigationsCopy){
            if(navigationsCopy[i].route === location){
                navigationsCopy[i].active = true
            }
            else{
                navigationsCopy[i].active = false
            }
        }
        setNavigation([...navigationsCopy])
    },[location])

  return (
    <>
        <Outlet/>
      <topBarStyle.Main>
        <topBarStyle.Logo>
            <topBarStyle.LogoImg src = {svgs.logoImg}/>
            <LogoText/>
        </topBarStyle.Logo>
        <topBarStyle.Right>
            <topBarStyle.SearchBar>
                <topBarStyle.SearchInput 
                    placeholder='Search anything...'
                />
                <topBarStyle.SearchIcon>
                    <IoSearch />
                </topBarStyle.SearchIcon>
            </topBarStyle.SearchBar>
            <topBarStyle.Naivgations>
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
                                        {navigationMap.name}
                                    </topBarStyle.NavigationContainer>
                                </Link>
                            )
                        })
                    }
                </topBarStyle.Navigation>
                <topBarStyle.ThemeSwicher
                    onClick={()=>setThemeSwitcher(!themeSwitcher)}
                >
                    <topBarStyle.SwitcherButton
                        themeSwitcher = {themeSwitcher}
                        onClick={()=>setThemeSwitcher(!themeSwitcher)}
                    >

                    </topBarStyle.SwitcherButton>
                </topBarStyle.ThemeSwicher>
                <topBarStyle.Profile>
                
                <div
                    onClick={()=>menuItemsShow()}
                >
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <Button>
                            < RiMapPinUserFill
                                size={'20px'}
                            />
                        </Button>
                    </Dropdown>
                </div>
                </topBarStyle.Profile>
            </topBarStyle.Naivgations>
        </topBarStyle.Right>
      </topBarStyle.Main>
        
    </>
  )
}

export default TopBar
