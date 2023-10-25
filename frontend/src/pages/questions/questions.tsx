import * as questionsStyled from './questions.styled'
import Mcqs from '../mcqs/mcqs'
import Test from '../test/test'
import Timer from '../../components/timer/timer'
import QuestionNumbers from '../../components/question numbers/questionNumbers'
import { useState } from 'react'

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
            <questionsStyled.Head>
            <questionsStyled.title>
                COMPUTER SCIENCE
            </questionsStyled.title>
            <questionsStyled.Subtitle>
                {'PROGRAMMING > PYTHON'}
            </questionsStyled.Subtitle>
            <questionsStyled.Switcher>
                <questionsStyled.Mcqs
                    mcqs = {mcqs}
                    onClick={()=>switcherClick('mcqs')}
                >
                MCQS
                </questionsStyled.Mcqs>
                <questionsStyled.Test
                    mcqs = {mcqs}
                    onClick={()=>switcherClick('test')}
                >
                TEST
                </questionsStyled.Test>
            </questionsStyled.Switcher>
            </questionsStyled.Head>
            <questionsStyled.Body>
                <questionsStyled.Left>
                    {
                        mcqs ?
                        <Mcqs /> :
                        <Test/>
                    }
                </questionsStyled.Left>
                <questionsStyled.Right>
                    {
                        !mcqs && <Timer/>
                    }
                    {
                        !mcqs && <QuestionNumbers/>
                    }
                    <questionsStyled.Ads>
                        ADS
                    </questionsStyled.Ads>
                </questionsStyled.Right>
            </questionsStyled.Body>
        </questionsStyled.Main>
    </>
  )
}

export default Questions
