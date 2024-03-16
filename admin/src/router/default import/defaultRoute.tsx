import * as i from '../../utils/defaultImports'
import TopBar from "../../components/top bar/topBar"
import * as defaultRouteStyle from './defaultRoute.style'
import ClippedDrawer from "../../components/sidebar/sidebarCliped"
import { Outlet } from 'react-router'

const DefaultRoute = () => {
    return(
        <defaultRouteStyle.Main>
            <TopBar/>
            <ClippedDrawer/>
            <i.Flex
                padding='0 50px 0 270px'
                justify='center'
            >
                <i.Flex
                    maxWidth={`${i.minimumWidth}px`}
                >
                    <Outlet/>
                </i.Flex>
            </i.Flex>
        </defaultRouteStyle.Main>
    )
}

export default DefaultRoute