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
import { IoMdArrowDropdown } from "react-icons/io";
import Topics from './topics/topics'
import Difficulty from './difficulty/difficaulty'
import Settings from './settings/settings'

const Questions = () => {

    const [mcqs, setMcqs] = useState(true)
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
                        <Topics/>
                        <Difficulty/>
                        {
                            // mcqs ?
                            <Mcqs />
                            // <Test/>
                        }
                    </questionsStyled.Left>
                    <questionsStyled.Right>
                        <Settings />
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
