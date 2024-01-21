import * as questionsStyled from './questions.styled'
import Mcqs from '../mcqs/mcqs'
import Test from '../test/test'
import Timer from '../../components/timer/timer'
import QuestionNumbers from '../../components/question numbers/questionNumbers'
import { useState } from 'react'
import { Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import Sort from './sort/sort'
import Schools from './schools/schools'
import Courses from './courses/courses'
import { FloatButton } from 'antd'

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
