import { useState } from 'react'
import Input from '../../../components/UI/input/input'
import { AppTypography } from '../../../styles/global'
import * as sortStyle from './courses.style'
import { FiSearch } from "react-icons/fi";
import theme from '../../../styles/theme';

const Courses = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <sortStyle.Main>
            <AppTypography>
                Courses
            </AppTypography>
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