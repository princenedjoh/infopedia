import * as questionsStyled from './questions.styled'
import Mcqs from '../mcqs/mcqs'
import Test from '../test/test'
import Timer from '../../components/timer/timer'
import QuestionNumbers from '../../components/question numbers/questionNumbers'
import { useState } from 'react'
import { AppTypography, Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import Sort from './sort/sort'
import Schools from './schools/schools'
import Courses from './courses/courses'
import Chip from '@mui/material/Chip';
import { FloatButton } from 'antd'
import theme from '../../styles/theme'
import Input from '../../components/UI/input/input'
import { FiSearch } from "react-icons/fi";
import { Difficulty } from './questions.styled';
import { IoMdArrowDropdown } from "react-icons/io";

const Questions = () => {

    const [mcqs, setMcqs] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const switcherClick = (name : string) => {
        if(name === 'mcqs'){
            !mcqs &&
            setMcqs(!mcqs)
        }
        else{
            mcqs && setMcqs(!mcqs)
        }
    }

  return (
    <>
        <questionsStyled.Main>
            <Flex width={`${minimumWidth}px`}>
                <questionsStyled.Body>
                    <questionsStyled.Left>
                        <Flex gap={20}>
                            <AppTypography
                                textColor={theme.colors2.gray.gray2}
                            >
                                Topics
                            </AppTypography>
                            {
                                [1,2,3,4,5,6].map((chip, index : number) => {
                                    return (
                                        <Chip 
                                            size='small'
                                            onClick={()=>{}}
                                            label={
                                            <AppTypography
                                                textColor={theme.colors2.gray.gray3}
                                            >
                                                Python
                                            </AppTypography>
                                            } 
                                        />
                                    )
                                })
                            }
                        </Flex>
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
                            <questionsStyled.Difficulty>
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
                            </questionsStyled.Difficulty>
                        </Flex>
                        {
                            // mcqs ?
                            <Mcqs />
                            // <Test/>
                        }
                    </questionsStyled.Left>
                    <questionsStyled.Right>
                        <Sort />
                        <Courses />
                        <Schools />
                        <questionsStyled.Ads>
                            ADS
                        </questionsStyled.Ads>
                    </questionsStyled.Right>
                </questionsStyled.Body>
            </Flex>
            <FloatButton.BackTop visibilityHeight={0} />
        </questionsStyled.Main>
    </>
  )
}

export default Questions
