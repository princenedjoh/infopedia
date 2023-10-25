import { Fragment, useEffect, useState } from 'react'
import * as testStyle from './test.style'
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

const Test = () => {
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
      <testStyle.Main>
              {
                data.map((dataMap, index : number)=>{
                  let varIndex = index
                  return(
                    <testStyle.QuestionContainer key={index}>
                      <Fragment>
                        <testStyle.QuestionNumber>
                          Question { index + 1}
                        </testStyle.QuestionNumber>
                        <testStyle.Question
                          showAnswer = {dataMap.showAnswer}
                        >
                          <testStyle.Left>
                            <testStyle.MainQuestion>
                              <Interweave content={ dataMap.question }/>
                            </testStyle.MainQuestion>
                            <testStyle.PossibleAnswers>
                              {
                                dataMap.possibleAnswers.map((answer, index : number)=>{
                                  return(
                                    <testStyle.PossibleAnswer key={index}>
                                      <testStyle.Radio
                                        type='radio'
                                        name={`radioGroup${varIndex}`}
                                      ></testStyle.Radio>
                                        <Interweave content={answer} />
                                    </testStyle.PossibleAnswer>
                                  )
                                })
                              }
                            </testStyle.PossibleAnswers>
                          </testStyle.Left>
                          <testStyle.Right>
                            <testStyle.Mark>
                              ?
                            </testStyle.Mark>
                            <testStyle.ClearChoice>
                              Clear Choice
                            </testStyle.ClearChoice>
                          </testStyle.Right>
                        </testStyle.Question>
                      </Fragment>
                    </testStyle.QuestionContainer>
                  )
                })
              }
      </testStyle.Main>
    </>
  )
}

export default Test
