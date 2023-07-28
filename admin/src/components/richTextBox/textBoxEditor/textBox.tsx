import * as textBoxStyle from './textBox.style'
import QuillEditorTextbox from '../quillEditor'
import GeneralQuillEditorTextbox from '../generalQuillEditor/quillEditor'
import { alphabets } from '../../../pages/questions/questions'
import { useEffect, useState } from 'react'
import { Markup } from 'interweave'
import { MdCancel } from 'react-icons/md'

const TextBox = () => {

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

    const [answers, setAnswers] = useState<string[]>(
        [
            ""
        ]
    )

    const addButtonClick = () => {
        let copyAnswers = answers
        copyAnswers.push("")
        setAnswers([...copyAnswers])
        window.scrollTo(0, 0);
        console.log(document.body.scrollHeight)
    }

    const deleteButton = (index:number) => {
        let copyAnswers = answers
        copyAnswers.splice(index, 1)
        setAnswers([...copyAnswers])
        window.scrollTo(0, document.body.scrollHeight);
    }
    

    return (
        <>
            <textBoxStyle.Main>
                <textBoxStyle.QuestionTop>
                    <textBoxStyle.Title>
                        Question
                    </textBoxStyle.Title>
                    <textBoxStyle.Question>
                        <GeneralQuillEditorTextbox/>
                    </textBoxStyle.Question>
                </textBoxStyle.QuestionTop>
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.AnswerTiltle>
                        Answers
                    </textBoxStyle.AnswerTiltle>
                    <textBoxStyle.Answers>
                        {
                            answers.map((answer, index : number)=>{
                                return(
                                    <textBoxStyle.AnswerSpan
                                        key={index}
                                    >
                                        {
                                            answers.length > 1 &&
                                            <textBoxStyle.CancelButton
                                                onClick={()=>deleteButton(index)}
                                            >
                                                x
                                            </textBoxStyle.CancelButton>
                                        }
                                        <textBoxStyle.Radio
                                            type={'radio'}
                                            name={`radioGroup`}
                                        />
                                        {`${alphabets[index]})`}
                                        <textBoxStyle.Answer>
                                            <QuillEditorTextbox
                                                values={answers}
                                                setValue={setAnswers}
                                                index={index}
                                            />
                                        </textBoxStyle.Answer>
                                    </textBoxStyle.AnswerSpan>
                                )
                            })
                        }
                        <textBoxStyle.AddAnswer
                            onClick={()=>addButtonClick()}
                        >
                            +
                        </textBoxStyle.AddAnswer>
                    </textBoxStyle.Answers>
                </textBoxStyle.PossibleAnswers>

                {/* programs */}
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.ProgamsTitle>
                        Programs
                    </textBoxStyle.ProgamsTitle>
                    <textBoxStyle.ProgramContainer>
                        <textBoxStyle.ProgramHeads>
                            program name
                            <MdCancel
                                size={"16px"}
                                opacity={0.5}
                            />
                        </textBoxStyle.ProgramHeads>
                        <textBoxStyle.ProgramInput
                            placeholder='search course name'
                        />
                    </textBoxStyle.ProgramContainer>
                </textBoxStyle.PossibleAnswers>

                {/* courses */}
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.ProgamsTitle>
                        Courses
                    </textBoxStyle.ProgamsTitle>
                    <textBoxStyle.ProgramContainer>
                        <textBoxStyle.ProgramHeads>
                            Course Name
                            <MdCancel
                                size={"16px"}
                                opacity={0.5}
                            />
                        </textBoxStyle.ProgramHeads>
                        <textBoxStyle.ProgramInput
                            placeholder='search course name'
                        />
                    </textBoxStyle.ProgramContainer>
                </textBoxStyle.PossibleAnswers>
                <textBoxStyle.SaveQuestion>
                    SAVE QUESTION
                </textBoxStyle.SaveQuestion>
            </textBoxStyle.Main>
        </>
    )
}

export default TextBox
