import * as i from '../../utils/defaultImports'
import Drawer from '@mui/material/Drawer';
import * as sidebarStyle from './sidebarCliped.style'
import { Flex } from '../../styles/global';
import { IconType } from 'react-icons'
import { MdAdminPanelSettings, MdLibraryAdd, MdSupervisorAccount } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import MenuItems from './components/menuItems/menuItems';
import { AiTwotoneFlag } from 'react-icons/ai';
import { FaSchoolFlag } from "react-icons/fa6";
import { MdWallet } from "react-icons/md";
import { BiReceipt } from "react-icons/bi";
import { CgServerless } from "react-icons/cg";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

export interface routesInterface {
    name : string
    active : boolean
    expand? : boolean
    icon? : IconType
    dropdown? : routesInterface[]
    path? : string
    badge? : boolean
}

export default function ClippedDrawer() {
    const navigate = i.useNavigate()
    const location = i.useLocation()
    const pathname = location.pathname
    let drill = 1

    
    const [sidebarItems, setSidebarItems] = i.useState<routesInterface[]>([
        {
            name : 'Add Question',
            active : false,
            expand : false,
            icon : MdLibraryAdd,
            path : '/addQuestions'
        },
        {
            name : 'Alerts',
            active : false,
            expand : false,
            badge : true,
            icon : FaBell ,
            dropdown : [
                {
                    name : 'Notification',
                    active : false,
                    expand : false,
                    icon : RiAdminFill,
                    badge : true,
                    path : '/alerts/notification'
                },
                {
                    name : 'Flags',
                    active : false,
                    expand : false,
                    badge : true,
                    icon : AiTwotoneFlag,
                    path : '/alerts/flags'
                },
            ]
        },
        {
            name : 'Academics',
            active : false,
            expand : false,
            icon : HiMiniAcademicCap,
            dropdown : [
                {
                    name : 'Schools',
                    active : false,
                    expand : false,
                    icon : FaSchoolFlag,
                    path : '/academics/schools'
                },
                {
                    name : 'Programs',
                    active : false,
                    expand : false,
                    icon : MdWallet,
                    path : '/academics/programs'
                },
                {
                    name : 'Courses',
                    active : false,
                    expand : false,
                    icon : BiReceipt,
                    path : '/academics/courses'
                },
                {
                    name : 'Topics',
                    active : false,
                    expand : false,
                    icon : CgServerless,
                    path : '/academics/topics'
                },
            ]
        },
        {
            name : 'People',
            active : false,
            expand : false,
            icon : IoPeopleSharp,
            dropdown : [
                {
                    name : 'Supervisors',
                    active : false,
                    expand : false,
                    icon : RiAdminFill,
                    path : '/people/supervisors'
                },
                {
                    name : 'Moderators',
                    active : false,
                    expand : false,
                    icon : MdSupervisorAccount,
                    path : '/people/moderators'
                },
            ]
        },
    ])

    const changeDropdownState = (
        drill : number,
        index : number
    ) => {
        let sidebarItemsCopy = sidebarItems
        const sidebarItem = sidebarItemsCopy[index]
        const setActiveFalse = (item: routesInterface, index2 : number) => {
            if(index === index2){
                item.expand = !item.expand
            } else {
                item.expand = false
            }
            if(item.dropdown) 
                for(let i of item.dropdown){
                    setActiveFalse(i, item.dropdown.indexOf(i))
                }
        }
        for(let item of sidebarItemsCopy){
            setActiveFalse(item, sidebarItemsCopy.indexOf(item))
        }
        setSidebarItems([...sidebarItemsCopy])
    }

    const setActiveItem = (
        route : routesInterface, 
        drill : number, 
        pathname : string
    ) => {
        const pathSplit = route.path?.split('/')
        const pathnameSplit = pathname.split('/')
        console.log('pathSplit', pathSplit && pathSplit[pathSplit?.length - 1])
        if(pathSplit && pathSplit[pathSplit?.length - 1] === pathnameSplit[drill]){
            route.active = true
            if(route.dropdown){
                for(const item of route.dropdown){
                    setActiveItem(item, drill + 1, pathname)
                }
            }
        } else {
            route.active = false
        }
    }

    i.useEffect(()=>{
        const sidebarItemsCopy = sidebarItems
        for(const item of sidebarItemsCopy){
            setActiveItem(item, drill, pathname)
        }
        setSidebarItems([...sidebarItemsCopy])
    },[location])

    i.useEffect(()=>{
        console.log(sidebarItems[1].expand)
    },[sidebarItems])

  return (
    <Flex
        width='fit-content'
        margin='50px 0 0 0'
        position='relative'
    >
        <sidebarStyle.Drawer>
            <i.Flex
                direction='column'
                justify='space-between'
                height='88%'
            >
                <i.Flex
                    padding='20px 20px'
                    direction='column'
                    gap={6}
                >
                    {
                        sidebarItems.map((item, index : number) => {
                            return (
                                <MenuItems 
                                    item={item} 
                                    index={index}
                                    drill={drill}
                                    changeDropdownState={changeDropdownState}
                                />
                            )
                        })
                    }
                </i.Flex>
                <i.Flex
                    justify='center'
                >
                    <i.PrimaryButton 
                        text='Logout'
                        size={{
                            width : '90%',
                            height : '40px'
                        }}
                    />
                </i.Flex>
            </i.Flex>
        </sidebarStyle.Drawer>
    </Flex>
  );
}