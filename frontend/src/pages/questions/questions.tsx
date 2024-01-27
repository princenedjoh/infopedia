import * as questionsStyled from './questions.styled'
import Mcqs from '../mcqs/mcqs'
import * as i from '../../utils/defaultImports'
import QuestionNumbers from '../../components/question numbers/questionNumbers'
import { useState } from 'react'
import { AppTypography, Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import Sort from './sort/sort'
import Schools from './schools/schools'
import Courses from './courses/courses'
import { FloatButton } from 'antd'
import theme from '../../styles/theme'
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

    i.useEffect(()=>{
        window.scrollTo(0,0)
    },[])

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
