import { Fragment, useState } from 'react'
import * as mcqsStyle from './mcqs.style'

const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const Mcqs = () => {

  const [showAnswer, setShowAnswer] = useState(false)

  const [data, setData] = useState([
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
    },
    {
      question : "Who developed Python Programming language?",
      answers : [
        "Wick Van Rossum",
        "Rasmus lerdof",
        "Guido van Rossum",
        "Niene Storm"
      ],
      answer : "Guido van Rossum",
      explanation : "",
      showAnswer : false
    },
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
    let dataCopy = data
    dataCopy[index].showAnswer = !dataCopy[index].showAnswer
    setData([...dataCopy])
  }

  return (
    <>
      <mcqsStyle.Main>
              {
                data.map((dataMap, index : number)=>{
                  return(
                    <mcqsStyle.QuestionContainer key={index}>
                      <Fragment>
                        <mcqsStyle.QuestionNumber>
                          Question { index + 1}
                        </mcqsStyle.QuestionNumber>
                        <mcqsStyle.Question
                          showAnswer = {dataMap.showAnswer}
                        >
                          <mcqsStyle.Left>
                            <mcqsStyle.MainQuestion>
                              { dataMap.question }
                            </mcqsStyle.MainQuestion>
                            <mcqsStyle.PossibleAnswers>
                              {
                                dataMap.answers.map((answer, index : number)=>{
                                  return(
                                    <mcqsStyle.PossibleAnswer key={index}>
                                      {`${alphabets[index]}) `} {answer}
                                    </mcqsStyle.PossibleAnswer>
                                  )
                                })
                              }
                            </mcqsStyle.PossibleAnswers>
                            <mcqsStyle.ShowAnswer
                              onClick={()=>showAnswerClick(index)}
                            >
                              {
                                !dataMap.showAnswer ? "Show Answer" :
                                "Hide Answer"
                              }
                            </mcqsStyle.ShowAnswer>
                          </mcqsStyle.Left>
                          <mcqsStyle.Right>
                              ?
                          </mcqsStyle.Right>
                        </mcqsStyle.Question>
                        <mcqsStyle.AnswerContainer
                          showAnswer = {dataMap.showAnswer}
                        >
                          <mcqsStyle.Answer
                            showAnswer = {dataMap.showAnswer}
                          >
                            {
                              dataMap.showAnswer &&
                              dataMap.answers.map((answer, index : number)=>{
                                return(
                                  <Fragment key={index}>
                                    {
                                      dataMap.answer == answer &&
                                      <span><mcqsStyle.AnswerText>Answer:</mcqsStyle.AnswerText> {`${alphabets[index]})`}  {answer}</span>
                                    }
                                  </Fragment>
                                )
                              })
                            }
                          </mcqsStyle.Answer>
                          <mcqsStyle.Explanation>
                            {
                              dataMap.showAnswer && dataMap.explanation.length != 0 &&
                              <mcqsStyle.ExplanationText>
                                Explanation : 
                              </mcqsStyle.ExplanationText>
                            }
                            {dataMap.showAnswer && dataMap.explanation.length != 0  && dataMap.explanation}
                          </mcqsStyle.Explanation>
                        </mcqsStyle.AnswerContainer>
                      </Fragment>
                    </mcqsStyle.QuestionContainer>
                  )
                })
              }
      </mcqsStyle.Main>
    </>
  )
}

export default Mcqs
