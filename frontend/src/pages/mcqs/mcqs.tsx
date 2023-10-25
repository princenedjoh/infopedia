import { Fragment, useState, useEffect } from 'react'
import * as mcqsStyle from './mcqs.style'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Interweave } from 'interweave'

export const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
export interface questionsType{
  question : string,
  answer : string,
  editorID : string,
  possibleAnswers : string[],
  coursesID : string[],
  programsID : string[],
  topicsID : string[],
  _id : string,
  showAnswer : boolean,
  explanation? : string
}

const Mcqs = () => {

  const [data, setData] = useState<questionsType[]>([])

  const showAnswerClick = (index : number) => {
    if(data){
      let dataCopy = data
      dataCopy[index].showAnswer = !dataCopy[index].showAnswer
      setData([...dataCopy])
    }
  }

  const { courseID } = useParams()
  useEffect(()=>{
    if(courseID){
      getQuestions(courseID)
    }
  },[courseID])

  const getQuestions = async (id : string) => {
    try {
      const questions = await axios.get("http://localhost:3001/questions/getQuestion", 
      {
          params : {
              coursesID : [id]
          }
      })
      let dataCopy : questionsType[] = []
      for(let question of questions.data){
        question.showAnswer = false
        dataCopy.push(question)
      }
      setData([...dataCopy])
    } catch (error) {
      console.log(error)
    }
}

  return (
    <>
      <mcqsStyle.Main>
              {
                data && data.length > 0 &&
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
                              <Interweave content={ dataMap.question }/>
                            </mcqsStyle.MainQuestion>
                            <mcqsStyle.PossibleAnswers>
                              {
                                dataMap.possibleAnswers.map((answer, index : number)=>{
                                  return(
                                    <mcqsStyle.PossibleAnswer key={index}>
                                      {`${alphabets[index]}) `} <Interweave content={answer}/>
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
                              dataMap.possibleAnswers.map((answer, index : number)=>{
                                return(
                                  <Fragment key={index}>
                                    {
                                      dataMap.answer === answer &&
                                      <span
                                        style={{
                                          display : "flex", gap : "2px"
                                        }}
                                      ><mcqsStyle.AnswerText>Answer:</mcqsStyle.AnswerText> 
                                      {`${alphabets[index]})`}  <Interweave content={answer}/></span>
                                    }
                                  </Fragment>
                                )
                              })
                            }
                          </mcqsStyle.Answer>
                          <mcqsStyle.Explanation>
                            {
                              dataMap.showAnswer && dataMap.explanation && dataMap.explanation?.length > 0  &&
                              <mcqsStyle.ExplanationText>
                                Explanation : 
                              </mcqsStyle.ExplanationText>
                            }
                            {dataMap.showAnswer && dataMap.explanation?.length !== 0  && dataMap.explanation}
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
