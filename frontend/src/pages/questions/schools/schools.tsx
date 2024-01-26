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
import { FaImage } from 'react-icons/fa';
import { BiSolidSchool } from "react-icons/bi";

interface schoolsInterface {
    name : string,
    image : string
}

const Schools = () => {

    const [searchValue, setSearchValue] = useState('')
    const [schools, setSchools] = useState([
        'KNUST', 'UCC', 'UEW', 'University of Ghana', 'UDS',
        'Accra Technical Institute'
    ])
    const [selectedSchools, setSelectedSchools] = useState<string[]>([])

    const addSelectedSchool = (index : number) => {
        let selectedSchoolsCopy = selectedSchools
        selectedSchoolsCopy.push(schools[index])
        const filteredSchool = schools.filter((school) => {
            return schools[index] !== school
        })
        setSchools([...filteredSchool])
    }

    const removeSelectedSchool = (index : number) => {
        let schoolsCopy = schools
        schoolsCopy.push(selectedSchools[index])
        const filteredSchool = selectedSchools.filter((school) => {
            return selectedSchools[index] !== school
        })
        setSelectedSchools([...filteredSchool])
    }

    return (
        <schoolsStyle.Main>
            <Flex 
                width='fit-content'
                align='center'
            >
                <BiSolidSchool 
                    color={theme.colors2.gray.gray3}
                />
                <AppTypography>
                    Schools
                </AppTypography>
            </Flex>
            <Flex flexWrap>
                {
                    selectedSchools.map((chip, index : number)=>{
                        return (
                            <Chip
                                size='small'
                                onDelete={()=>removeSelectedSchool(index)}
                                label={
                                    <Flex 
                                        width='fit-content'
                                        >
                                        <AppTypography
                                            textColor={theme.colors2.gray.gray3}
                                            size={TypographySize.xs}
                                            bold={TypographyBold.md}
                                            ellipsis
                                            maxLines={1}
                                        >
                                            {chip}
                                        </AppTypography>
                                    </Flex>
                                } />
                        )
                    })
                }
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
            <Flex flexWrap >
                {
                    schools.map((chip, index : number)=>{
                        return (
                            <Chip
                                avatar={
                                    <Avatar>
                                        <FaImage/>
                                    </Avatar>
                                }
                                clickable
                                onClick={()=>addSelectedSchool(index)}
                                label={
                                    <AppTypography
                                        textColor={theme.colors2.gray.gray3}
                                        size={TypographySize.xs}
                                        bold={TypographyBold.md}
                                        ellipsis
                                        maxLines={1}
                                    >
                                        {chip}
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