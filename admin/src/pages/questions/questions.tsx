import { Fragment, useState } from 'react'
import * as questionsStyle from './questions.styled'
import TextBox from '../../components/richTextBox/textBoxEditor/textBox'
import { Interweave } from 'interweave';

export const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

export interface questionInterface{
  question : string,
  answers : string[],
  answer : string,
  explanation : string | undefined,
  showAnswer : boolean
}

const Questions = () => {

  const [showAnswer, setShowAnswer] = useState(false)
  const [scrollTo, setScrollTo] = useState<number>()
  const [questions, setQuestions] = useState<questionInterface[]>([])
  
  const showAnswerClick = (index : number) => {
    if(questions){
      let dataCopy = [...questions].reverse()
      dataCopy[index].showAnswer = !dataCopy[index].showAnswer
      setQuestions([...dataCopy].reverse())
    }
  }

  const [questionUpdated, setQuestionUpdated] = useState<boolean>(false)


  return (
    <>
      <questionsStyle.MainContainer>
        <questionsStyle.Main>
          <questionsStyle.MainLeft>

          </questionsStyle.MainLeft>
          <questionsStyle.MainRight>
              {
                questions?.length > 0 &&
                <questionsStyle.Top>
                  {
                    questions &&
                    [...questions].reverse().map((questionsMap, index : number)=>{
                      return(
                        questions &&
                        <questionsStyle.QuestionContainer 
                          questionUpdated={index === 0? questionUpdated :false} key={index}>
                          <Fragment>
                            <questionsStyle.QuestionNumber>
                              Question
                            </questionsStyle.QuestionNumber>
                            <questionsStyle.Question
                              showAnswer = {questionsMap.showAnswer}
                            >
                              <questionsStyle.Left>
                                <questionsStyle.MainQuestion>
                                  <Interweave content={questionsMap.question}/>
                                </questionsStyle.MainQuestion>
                                <questionsStyle.PossibleAnswers>
                                  {
                                    questionsMap.answers.map((answer, index : number)=>{
                                      return(
                                        <questionsStyle.PossibleAnswer key={index}>
                                          {`${alphabets[index]}) `} <Interweave content={answer}/>
                                        </questionsStyle.PossibleAnswer>
                                      )
                                    })
                                  }
                                </questionsStyle.PossibleAnswers>
                                <questionsStyle.ShowAnswer
                                  onClick={()=>showAnswerClick(index)}
                                >
                                  {
                                    !questionsMap.showAnswer ? "Show Answer" :
                                    "Hide Answer"
                                  }
                                </questionsStyle.ShowAnswer>
                              </questionsStyle.Left>
                            </questionsStyle.Question>
                            <questionsStyle.AnswerContainer
                              showAnswer = {questionsMap.showAnswer}
                            >
                              <questionsStyle.Answer
                                showAnswer = {questionsMap.showAnswer}
                              >
                                {
                                  questionsMap.showAnswer &&
                                  questionsMap.answers.map((answer, index : number)=>{
                                    return(
                                      <Fragment key={index}>
                                        {
                                          questionsMap.answer === answer &&
                                          <span
                                            style={{display : "flex", gap : "3px"}}
                                          ><questionsStyle.AnswerText>{`Answer: `}</questionsStyle.AnswerText> 
                                          {`${alphabets[index]})`}  <Interweave content={answer}/></span>
                                        }
                                      </Fragment>
                                    )
                                  })
                                }
                              </questionsStyle.Answer>
                              <questionsStyle.Explanation>
                                {
                                  questionsMap.showAnswer && questionsMap.explanation?.length !== 0 &&
                                  <questionsStyle.ExplanationText>
                                    Explanation : 
                                  </questionsStyle.ExplanationText>
                                }
                                {questionsMap.showAnswer && questionsMap.explanation?.length !== 0  && questionsMap.explanation}
                              </questionsStyle.Explanation>
                            </questionsStyle.AnswerContainer>
                          </Fragment>
                        </questionsStyle.QuestionContainer>

                      )
                    })
                  }
                </questionsStyle.Top>
              }
            <questionsStyle.Bottom>
              <TextBox
                questionUpdated={questionUpdated} setQuestionUpdated={setQuestionUpdated}
                questions={questions} setQuestions={setQuestions}
              />
            </questionsStyle.Bottom>
            <questionsStyle.WhiteSpcace>

            </questionsStyle.WhiteSpcace>
          </questionsStyle.MainRight>
          <questionsStyle.Ads>
            ADS
          </questionsStyle.Ads>
        </questionsStyle.Main>
      </questionsStyle.MainContainer>
    </>
  )
}

export default Questions
