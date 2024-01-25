import { Chip } from "@mui/material"
import { Flex, AppTypography } from "../../../styles/global"
import theme from "../../../styles/theme"
import * as difficultyStyle from './dificulty.style'
import { useState } from "react"
import Input from "../../../components/UI/input/input"
import { FiSearch } from "react-icons/fi"
import { IoMdArrowDropdown } from "react-icons/io"
import Dropdown, { tagType } from "../../../components/UI/input/dropdown"

const Difficulty = () => {

    const [searchValue, setSearchValue] = useState('')
    const [tagValue, setTagValue] = useState('Difficulty')
    const [tags, setTags] = useState<tagType[]>([
        {
            id : 'All',
            name : 'All'
        },
        {
            id : 'Easy',
            name : 'Easy'
        },
        {
            id : 'Medium',
            name : 'Medium'
        },
        {
            id : 'Hard',
            name : 'Hard'
        },
    ])

    return (
        <Flex>
            <Input
                PreIcon={FiSearch}
                value={searchValue}
                setState={setSearchValue}
                background={`${theme.colors2.gray.gray7}`}
                border='none'
                type='text'
                placeholder='Search Courses'
            />
            <Dropdown 
                tags={tags}
                setValue={setTagValue}
                value={tagValue}
                color={theme.colors2.gray.gray2}
                background={`${theme.colors2.gray.gray7}`}
                border='none'
                size={{
                    height : '47px',
                    width : '200px'
                }}
            />
            {/* <difficultyStyle.Difficulty>
                <Flex justify='space-between' align='center'>
                    <AppTypography
                        textColor={theme.colors2.gray.gray3}
                    >
                        Difficulty
                    </AppTypography>
                    <IoMdArrowDropdown
                        color={theme.colors2.gray.gray3}
                    />
                </Flex>
            </difficultyStyle.Difficulty> */}
        </Flex>
    )
}

export default Difficulty