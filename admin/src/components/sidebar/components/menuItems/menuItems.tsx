import * as i from '../../../../utils/defaultImports'
import Drawer from '@mui/material/Drawer';
import * as sidebarStyle from '../../sidebarCliped.style'
import { Flex } from '../../../../styles/global';
import { IconType } from 'react-icons'
import { MdLibraryAdd } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { routesInterface } from '../../sidebarCliped'
import * as menuItemsStyle from './menuitems.style'

interface menuItemsProps {
    item : routesInterface,
    index : number,
    drill : number,
    changeDropdownState: (drill: number, index: number) => void
}

const MenuItems = ({
    item,
    index,
    drill,
    changeDropdownState
} : menuItemsProps) => {

    const navigate = i.useNavigate()
    const handleContainerClick = (
        dropdown : boolean, 
        index : number,
        path? : string
    ) => {
        if(dropdown){
            changeDropdownState(drill, index)
        }
        path && navigate(path)
    }

    return ( 
        <i.Flex
            direction='column'
            gap={0.01}
        >
            <sidebarStyle.Container
                active={item.active}
                dropdown={item.dropdown ? true : false}
                onClick={()=>handleContainerClick(
                    item.dropdown
                        ? true 
                        : false,
                    index,
                    item.path
                )}
            >
                <i.Flex
                    justify='space-between'
                    align='center'
                >
                    <i.Flex
                        width='fit-content'
                        align='center'
                    >
                        {
                            item.icon &&
                            <item.icon 
                                color={
                                    item.active
                                        ? i.theme.colors2.main.primary
                                        : i.theme.colors2.gray.gray3
                                }
                            />
                        }
                        <i.AppTypography
                            textColor={
                                item.active
                                    ? i.theme.colors2.main.primary
                                    : i.theme.colors2.gray.gray2
                            }
                            bold={i.TypographyBold.md}
                        >
                            {item.name}
                        </i.AppTypography>
                        {
                            item.badge &&
                            <sidebarStyle.CustomBadge>
                                <Flex 
                                    width='fit-content'
                                    margin='-1px 0 0 0'
                                >
                                    <i.AppTypography
                                        textColor={i.theme.colors2.gray.gray9}
                                        size={i.TypographySize.xs}
                                    >
                                        9
                                    </i.AppTypography>
                                </Flex>
                            </sidebarStyle.CustomBadge>
                        }
                    </i.Flex>
                    {
                        item.dropdown &&
                        <IoMdArrowDropdown 
                            color={i.theme.colors2.gray.gray3}
                        />
                    }
                </i.Flex>
            </sidebarStyle.Container>
            {
                item.dropdown?.map((dropItem, index : number) => {
                    return (
                        <sidebarStyle.DropdownContainer
                            active={item.active}
                            expand={item.expand}
                            key={index}
                        >
                            <i.Flex
                                padding='0 0 0 20px'
                            >
                                <MenuItems
                                    item={dropItem}
                                    index={index}
                                    drill={drill + 1}
                                    changeDropdownState={changeDropdownState}
                                />
                            </i.Flex>
                        </sidebarStyle.DropdownContainer>
                    )
                })
            }
        </i.Flex>
    )
}

export default MenuItems