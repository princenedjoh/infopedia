import * as topBarStyle from './topBar.styled'
import { logos } from '../../assets/index'
import { IoSearch } from 'react-icons/io5'
import { RiMapPinUserFill } from 'react-icons/ri'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoNotifications } from "react-icons/io5"
import theme from '../../styles/theme'


const TopBar = () => {
    const location = useLocation().pathname
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
    
    const navigationClick = (name : string, route : string) => {
        const navigationsCopy = navigations
        for(const i in navigationsCopy){
            if( navigationsCopy[i].name === name){
                if(!navigationsCopy[i].active){
                    navigationsCopy[i].active = true
                }
            }
            else{
                navigationsCopy[i].active = false
            }
        }
        setNavigation([...navigationsCopy])
    }

    const [themeSwitcher, setThemeSwitcher] = useState(false)

  return (
    <>
        
      <topBarStyle.Main>
        <topBarStyle.Logo>
            <topBarStyle.LogoImg src = {logos.fullLogo}/>
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
                                    {
                                        navigationMap.name === "notification" ?
                                        <topBarStyle.Notification>
                                            <IoNotifications
                                                size={"18px"}
                                                color={theme.colors.background.dark.secondary}
                                            />
                                            <topBarStyle.NotifNumber>
                                            </topBarStyle.NotifNumber>
                                        </topBarStyle.Notification>:
                                        <topBarStyle.NavigationContainer 
                                            onClick={()=>navigationClick(
                                                navigationMap.name,
                                                navigationMap.route
                                            )}
                                            active={navigations[index].active}>
                                            {navigationMap.name}
                                        </topBarStyle.NavigationContainer>
                                    }
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
                    < RiMapPinUserFill
                        size={'20px'}
                    />
                </topBarStyle.Profile>
            </topBarStyle.Naivgations>
        </topBarStyle.Right>
      </topBarStyle.Main>
    </>
  )
}

export default TopBar
