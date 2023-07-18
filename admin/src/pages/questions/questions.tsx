import { Fragment, useState } from 'react'
import * as questionsStyle from './questions.styled'
import TextBox from '../../components/richTextBox/textBoxEditor/textBox'

export const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const Questions = () => {

  const [showAnswer, setShowAnswer] = useState(false)
  const [scrollTo, setScrollTo] = useState<number>()
  const [questions, setQuestions] = useState([
    {
      question : "Who developed Python Programming language?",
      answers : [
        "Wick Van Rossum",
        "Rasmus lerdof",
        "Guido van Rossum",
        "Niene Storm"
      ],
      answer : "Guido van Rossum",
      explanation : "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands.",
      showAnswer : false
    }
  ])
  
  const showAnswerClick = (index : number) => {
    let dataCopy = questions
    dataCopy[index].showAnswer = !dataCopy[index].showAnswer
    setQuestions([...dataCopy])
  }


  return (
    <>
      <questionsStyle.MainContainer>
        <questionsStyle.Main>
          <questionsStyle.MainLeft>

          </questionsStyle.MainLeft>
          <questionsStyle.MainRight>
            <questionsStyle.Top>
              {
                questions.map((questionsMap, index : number)=>{
                  return(
                    <questionsStyle.QuestionContainer key={index}>
                      <Fragment>
                        <questionsStyle.QuestionNumber>
                          Question
                        </questionsStyle.QuestionNumber>
                        <questionsStyle.Question
                          showAnswer = {questionsMap.showAnswer}
                        >
                          <questionsStyle.Left>
                            <questionsStyle.MainQuestion>
                              { questionsMap.question }
                            </questionsStyle.MainQuestion>
                            <questionsStyle.PossibleAnswers>
                              {
                                questionsMap.answers.map((answer, index : number)=>{
                                  return(
                                    <questionsStyle.PossibleAnswer key={index}>
                                      {`${alphabets[index]}) `} {answer}
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
                                      <span><questionsStyle.AnswerText>Answer:</questionsStyle.AnswerText> {`${alphabets[index]})`}  {answer}</span>
                                    }
                                  </Fragment>
                                )
                              })
                            }
                          </questionsStyle.Answer>
                          <questionsStyle.Explanation>
                            {
                              questionsMap.showAnswer && questionsMap.explanation.length !== 0 &&
                              <questionsStyle.ExplanationText>
                                Explanation : 
                              </questionsStyle.ExplanationText>
                            }
                            {questionsMap.showAnswer && questionsMap.explanation.length !== 0  && questionsMap.explanation}
                          </questionsStyle.Explanation>
                        </questionsStyle.AnswerContainer>
                      </Fragment>
                    </questionsStyle.QuestionContainer>

                  )
                })
              }
            </questionsStyle.Top>
            <questionsStyle.Bottom>
              <TextBox/>
            </questionsStyle.Bottom>
            <questionsStyle.WhiteSpcace>

            </questionsStyle.WhiteSpcace>
          </questionsStyle.MainRight>
        </questionsStyle.Main>
          <questionsStyle.Ads>
            ADS
          </questionsStyle.Ads>
      </questionsStyle.MainContainer>
    </>
  )
}

export default Questions
