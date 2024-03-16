import * as topBarStyle from './topBar.styled'
import { logos } from '../../assets'
import { IoSearch } from 'react-icons/io5'
import { RiMapPinUserFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoNotifications } from "react-icons/io5"
import theme from '../../styles/theme'
import { Badge } from 'antd';
import { Flex, ClickableTab } from '../../styles/global'
import { FaBell } from 'react-icons/fa'
import { minimumWidth } from '../../utils/types'
import { Avatar, Chip } from "@mui/material"
import * as i from '../../utils/defaultImports'

const TopBar = () => {
    const location = useLocation().pathname
    const [themeSwitcher, setThemeSwitcher] = useState(false)
    const navigate = useNavigate()
    const [navigations, setNavigation] = useState([
        {
            name : 'Home',
            route : '/',
            active : location === '/' ? true : false
        },
        {
            name : 'Add Questions',
            route : '/addQuestions',
            active : location === '/addQuestions' ? true : false
        },
        {
            name : 'notification',
            route : '/notification',
            active : location === '/notification' ? true : false
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

    useEffect(()=>{
        setActiveTab()
    },[location])

  return (
    <>
      <topBarStyle.Main>
        <Flex 
            align='center' 
            justify='space-between'
            margin='0 50px 0 30px'
        >

            <topBarStyle.Logo
                onClick={()=>navigate('/')}
            >
                <topBarStyle.LogoImg src = {logos.fullLogo}/>
            </topBarStyle.Logo>
            <topBarStyle.Right>
                {/* <topBarStyle.SearchBar>
                    <topBarStyle.SearchInput 
                        placeholder='Search anything...'
                    />
                    <topBarStyle.SearchIcon>
                        <IoSearch />
                    </topBarStyle.SearchIcon>
                </topBarStyle.SearchBar> */}
                <Flex
                    width='fit-content'
                >
                    {/* <topBarStyle.ThemeSwicher
                        onClick={()=>setThemeSwitcher(!themeSwitcher)}
                    >
                        <topBarStyle.SwitcherButton
                            themeSwitcher = {themeSwitcher}
                            onClick={()=>setThemeSwitcher(!themeSwitcher)}
                        >

                        </topBarStyle.SwitcherButton>
                    </topBarStyle.ThemeSwicher> */}
                    <Flex 
                        width='fit-content'
                        align='center'
                        gap={20}
                    >
                        <Chip
                            avatar={
                                <Avatar>
                                    <Flex
                                        width='fit-content'
                                        margin='3px'
                                    >
                                        <i.AppTypography
                                            textColor={i.theme.colors2.shades.white}
                                            bold={i.TypographyBold.md}
                                            size={i.TypographySize.xs}
                                        >
                                            PN
                                        </i.AppTypography>
                                    </Flex>
                                </Avatar>
                            }
                            onClick={()=>{}}
                            label={
                            <i.AppTypography
                                ellipsis
                                maxLines={1}
                                textColor={theme.colors2.gray.gray2}
                                bold={i.TypographyBold.sm}
                                size={i.TypographySize.xs}
                            >
                                Prince Nedjoh
                            </i.AppTypography>
                            } 
                        />
                    </Flex>

                </Flex>
            </topBarStyle.Right>
        </Flex>
      </topBarStyle.Main>
    </>
  )
}

export default TopBar
