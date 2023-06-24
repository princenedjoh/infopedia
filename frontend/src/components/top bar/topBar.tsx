import * as topBarStyle from './topBar.styled'
import svgs from '../../assets/index'
import { IoSearch } from 'react-icons/io5'
import { RiMapPinUserFill } from 'react-icons/ri'
import { useState } from 'react'
import { Outlet } from 'react-router'
import { Link, useLocation } from 'react-router-dom'


const TopBar = () => {
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
    
    const navigationClick = (name : string, route : string) => {
        const navigationsCopy = navigations
        for(const i in navigationsCopy){
            if( navigationsCopy[i].name == name){
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
        <Outlet/>
      <topBarStyle.Main>
        <topBarStyle.Logo>
            <topBarStyle.LogoImg src = {svgs.logoImg}/>
            <topBarStyle.LogoImg src = {svgs.infoPedia}/>
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
                                        onClick={()=>navigationClick(
                                            navigationMap.name,
                                            navigationMap.route
                                        )}
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
