import { Flex } from "../../styles/global"
import { IoMdArrowDropdown } from "react-icons/io";
import * as sortIconStyle from './sortIcon.style'
import { useState } from "react";

export type sortState = 'top' | 'down' | 'normal' 
interface sortIconProps {
    sortState : sortState
}

const SortIcon = ({sortState} : sortIconProps) => {

    const [sortValue, setSortValue] = useState<sortState>(sortState)
    const handleTopToggle = () => {
        setSortValue('down')
    }

    const handleDownToggle = () => {
        setSortValue('top')
    }

    return (
        <Flex 
            direction="column"
            width='fit-content'
            gap={1}
        >
            <sortIconStyle.Top
                onClick={handleTopToggle}
                visibility={
                    sortState === 'down' 
                        || sortState === 'normal' 
                        ? true
                        : false
                }
            >
                <IoMdArrowDropdown />
            </sortIconStyle.Top>
            <sortIconStyle.Bottom
                onClick={handleDownToggle}
                visibility={
                    sortState === 'top' 
                        || sortState === 'normal' 
                        ? true
                        : false
                }
            >
                <IoMdArrowDropdown />
            </sortIconStyle.Bottom>
        </Flex>
    )
}

export default SortIcon