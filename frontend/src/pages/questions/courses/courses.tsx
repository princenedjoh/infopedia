import { useState } from 'react'
import Input from '../../../components/UI/input/input'
import { AppTypography, Flex } from '../../../styles/global'
import * as sortStyle from './courses.style'
import { FiSearch } from "react-icons/fi";
import theme from '../../../styles/theme';
import { HiAcademicCap } from "react-icons/hi2";

const Courses = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <sortStyle.Main>
            <Flex 
                width='fit-content'
                align='center'
            >
                <HiAcademicCap 
                    color={theme.colors2.gray.gray3}
                />
                <AppTypography>
                    Courses
                </AppTypography>
            </Flex>
            <Input
                PreIcon={FiSearch}
                value={searchValue}
                setState={setSearchValue}
                background={`${theme.colors2.gray.gray6}80`}
                border='none'
                type='text'
                placeholder='Search Courses'
            />
        </sortStyle.Main>
    )
}

export default Courses