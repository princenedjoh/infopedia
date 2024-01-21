import { Flex } from "../../styles/global"
import { IoMdArrowDropdown } from "react-icons/io";
import * as sortIconStyle from './sortIcon.style'

const SortIcon = () => {
    return (
        <Flex 
            direction="column"
            width='fit-content'
            gap={1}
        >
            <sortIconStyle.Top>
                <IoMdArrowDropdown />
            </sortIconStyle.Top>
            <sortIconStyle.Bottom>
                <IoMdArrowDropdown />
            </sortIconStyle.Bottom>
        </Flex>
    )
}

export default SortIcon