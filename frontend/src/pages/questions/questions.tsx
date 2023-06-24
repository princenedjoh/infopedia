import * as questionsStyled from './questions.styled'
import Mcqs from '../mcqs/mcqs'
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
                    <Mcqs />
                </questionsStyled.Left>
                <questionsStyled.Right>
                    ADS
                </questionsStyled.Right>
            </questionsStyled.Body>
        </questionsStyled.Main>
    </>
  )
}

export default Questions
