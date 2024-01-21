import { AppTypography, Flex } from '../../../styles/global'
import * as schoolsStyle from './schools.style'
import { useState } from 'react'
import Input from '../../../components/UI/input/input'
import { FiSearch } from "react-icons/fi";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import theme from '../../../styles/theme';
import { TypographyBold, TypographySize } from '../../../styles/style.types';
import './schools.css'

const Schools = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <schoolsStyle.Main>
            <AppTypography>
                Schools
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
            <Flex flexWrap margin='5px 0 0 0'>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((chip, index : number)=>{
                        return (
                            <Chip 
                                size='small'
                                deleteIcon={
                                    <schoolsStyle.Number>
                                        <AppTypography
                                            size={TypographySize.xs}
                                            textColor={theme.colors2.shades.white}
                                        >
                                            200
                                        </AppTypography>
                                    </schoolsStyle.Number>
                                }
                                onDelete={()=>{}}
                                clickable
                                label={
                                    <AppTypography
                                        textColor={theme.colors2.gray.gray3}
                                        size={TypographySize.xs}
                                        bold={TypographyBold.md}
                                        ellipsis
                                        maxLines={1}
                                    >
                                        KNUST
                                    </AppTypography>
                                } />
                        )
                    })
                }
            </Flex>
        </schoolsStyle.Main>
    )
}

export default Schools