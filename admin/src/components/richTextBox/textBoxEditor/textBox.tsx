import * as textBoxStyle from './textBox.style'
import QuillEditorTextbox from '../quillEditor'
import GeneralQuillEditorTextbox from '../generalQuillEditor/quillEditor'
import { alphabets } from '../../../pages/questions/questions'
import { useEffect, useState, Fragment, useRef } from 'react'
import { MdCancel } from 'react-icons/md'
import axios from "axios"
import Cookies from "universal-cookie"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { questionInterface } from "../../../pages/questions/questions"

const cookie = new Cookies()
interface questionsUpdateInterface{
    questionUpdated : boolean,
    setQuestionUpdated : React.Dispatch<React.SetStateAction<boolean>>,
    questions : questionInterface[],
    setQuestions : React.Dispatch<React.SetStateAction<questionInterface[]>>
}
const TextBox = (
    {
        questionUpdated,
        setQuestionUpdated,
        questions,
        setQuestions
    }
    :questionsUpdateInterface
) => {
    interface programsTypes{
        _id : string,
        name : string
    }
    interface coursesTypes{
        _id : string,
        courseName : string
    }
    interface topicsTypes{
        _id : string,
        name : string
    }
    const [question, setQuestion] = useState("")
    const [possibleAnswers, setPossibleAnswers] = useState<string[]>([""])
    const [answer, setAnswer] = useState("")
    const [programs, setPrograms] = useState<programsTypes[]>([])
    const [programsID, setProgramsID] = useState<string[]>([])
    const [courses, setCourses] = useState<coursesTypes[]>([])
    const [coursesID, setCoursesID] = useState<string[]>([])
    const [topics, setTopics] = useState<topicsTypes[]>([])
    const [topicsID, setTopicsID] = useState<string[]>([])
    const [explanation, setExplantion] = useState<string>()

    const [searchPrograms, setSearchPrograms] = useState<programsTypes[]>([])
    const [searchCourses, setSearchCourses] = useState<coursesTypes[]>([])
    const [searchTopics, setSearchTopics] = useState<topicsTypes[]>([])

    const [programInput, setProgramInput] = useState<string>("")
    const [courseInput, setCourseInput] = useState<string>("")
    const [topicInput, setTopicInput] = useState<string>("")

    const data = {
        question,
        possibleAnswers,
        answer,
        explanation,
        programsID,
        coursesID,
        topicsID
  }

  const handleRadioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const setUserQuestions = () => {
    if(setQuestions){
        let questionsCopy = questions
        questionsCopy?.push({
            question : question,
            answers : possibleAnswers,
            answer : answer,
            explanation : explanation,
            showAnswer : false
        })
        setQuestions([...questionsCopy])
    }
  }

  const submitHandler = async () => {
    try {
        const result = await axios.post("http://localhost:3001/questions/add", data ,
        {
            headers : {
                Authorization : `Bearer ${cookie.get("jwtToken")}`
            }
        })
        setUserQuestions()
        toast.success(
            "question added successfully",
            {
                hideProgressBar : true,
                closeOnClick : true
            }
        )
        document.getElementById("mainScroller")?.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
        setQuestionUpdated(!questionUpdated)
        setTimeout(() => {
            setQuestionUpdated((q) => !q)
        }, 3000);
    } catch (error) {
        toast.error(
            "Unable to add question",
            {
                hideProgressBar : true,
                closeOnClick : true
            }
        )
        console.log(error)
    }
  }

    const [answers, setAnswers] = useState<string[]>(
        [
            ""
        ]
    )

    const getProgram = async () => {
        try {
            const programs = await axios.get("http://localhost:3001/programs/getProgram",
                {
                    params : {
                        programName : programInput
                    }
                }
            )
            if(programs.data){
            }
            let searchProgramsCopy = []
            for(let i in programs.data){
                searchProgramsCopy.push({
                    _id : programs.data[i]._id,
                    name : programs.data[i].programName
                })
            }
            setSearchPrograms(searchProgramsCopy)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(programInput && programInput?.length > 0){
            getProgram()
        }
        else{
            setSearchPrograms([])
        }
    },[programInput])

    const getCourse = async () => {
        try {
            const courses = await axios.get("http://localhost:3001/courses/getCourse",
                {
                    params : {
                        courseName : courseInput
                    }
                }
            )
            if(courses.data){
            }
            let searchCoursesCopy = []
            for(let i in courses.data){
                searchCoursesCopy.push({
                    _id : courses.data[i]._id,
                    courseName : courses.data[i].courseName
                })
            }
            setSearchCourses(searchCoursesCopy)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(courseInput && courseInput?.length > 0){
            getCourse()
        }
        else{
            setSearchCourses([])
        }
    },[courseInput])

    const getTopic = async () => {
        try {
            const topics = await axios.get("http://localhost:3001/topics/getTopic",
                {
                    params : {
                        name : topicInput
                    }
                }
            )
            if(topics.data){
            }
            let searchTopicsCopy = []
            for(let i in topics.data){
                searchTopicsCopy.push({
                    _id : topics.data[i]._id,
                    name : topics.data[i].name
                })
            }
            setSearchTopics(searchTopicsCopy)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(topicInput && topicInput?.length > 0){
            getTopic()
        }
        else{
            setSearchTopics([])
        }
    },[topicInput])

    const searchProgramClick = (searchProgramClick : programsTypes) => {
        let programsCopy = programs
        let programsIDCopy = programsID
        programsCopy.push(searchProgramClick)
        programsIDCopy.push(searchProgramClick._id)
        setPrograms([...programsCopy])
        setProgramsID([...programsIDCopy])
        setSearchPrograms([])
        setProgramInput("")
    }

    const searchCourseClick = (searchCourseClick : coursesTypes) => {
        let coursesCopy = courses
        let coursesIDCopy = coursesID
        coursesCopy.push(searchCourseClick)
        coursesIDCopy.push(searchCourseClick._id)
        setCourses([...coursesCopy])
        setCoursesID([...coursesIDCopy])
        setSearchCourses([])
        setCourseInput("")
    }

    const searchTopicClick = (searchTopicClick : topicsTypes) => {
        let topicsCopy = topics
        let topicsIDCopy = topicsID
        topicsCopy.push(searchTopicClick)
        topicsIDCopy.push(searchTopicClick._id)
        setTopics([...topicsCopy])
        setTopicsID([...topicsIDCopy])
        setSearchTopics([])
        setTopicInput("")
    }

    const programClick = (programParam : programsTypes) => {
        let programsCopy = programs.filter((program)=>program.name !== programParam.name)
        setPrograms([...programsCopy])
    }

    const courseClick = (courseParam : coursesTypes) => {
        let coursesCopy = courses.filter((course)=>course.courseName !== courseParam.courseName)
        setCourses([...coursesCopy])
    }

    const topicClick = (topicParam : topicsTypes) => {
        let topicsCopy = topics.filter((topic)=>topic.name !== topicParam.name)
        setTopics([...topicsCopy])
    }

    const addButtonClick = () => {
        let possibleAnswersCopy = possibleAnswers
        possibleAnswersCopy.push("")
        setPossibleAnswers([...possibleAnswersCopy])
    }

    const deleteButton = (index:number) => {
        let copyAnswers = possibleAnswers
        copyAnswers.splice(index, 1)
        setPossibleAnswers([...copyAnswers])
    }
    

    return (
        <>
            <textBoxStyle.Main id='main'>
                <ToastContainer/>
                <textBoxStyle.QuestionTop>
                    <textBoxStyle.Title>
                        Question
                    </textBoxStyle.Title>
                    <textBoxStyle.Question>
                        <GeneralQuillEditorTextbox
                            setValue={setQuestion}
                        />
                    </textBoxStyle.Question>
                </textBoxStyle.QuestionTop>
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.AnswerTiltle>
                        Answers
                    </textBoxStyle.AnswerTiltle>
                    <textBoxStyle.Answers>
                        {
                            possibleAnswers.map((answerMap, index : number)=>{
                                return(
                                    <textBoxStyle.AnswerSpan
                                        key={index}
                                    >
                                        {
                                            possibleAnswers.length > 1 &&
                                            <textBoxStyle.CancelButton
                                                onClick={()=>deleteButton(index)}
                                            >
                                                x
                                            </textBoxStyle.CancelButton>
                                        }
                                        <textBoxStyle.Radio
                                            onChange={(e)=>handleRadioChange(e)}
                                            value={answerMap}
                                            type={'radio'}
                                            name={`radioGroup`}
                                        />
                                        {`${alphabets[index]})`}
                                        <textBoxStyle.Answer>
                                            <QuillEditorTextbox
                                                values={possibleAnswers}
                                                setValue={setPossibleAnswers}
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
                        {
                            programs.map((programMap, index : number)=>{
                                return(
                                    <textBoxStyle.ProgramHeads 
                                        onClick={()=>programClick(programMap)}
                                        key={index}>
                                        {programMap.name}
                                        <MdCancel
                                            size={"16px"}
                                            opacity={0.5}
                                        />
                                    </textBoxStyle.ProgramHeads>
                                )
                            })
                        }
                        <textBoxStyle.ProgramInput
                            placeholder='search program name'
                            value={programInput}
                            onChange={(e)=>setProgramInput(e.target.value)}
                        />
                    </textBoxStyle.ProgramContainer>
                </textBoxStyle.PossibleAnswers>

                {/* program search container */}
                {
                    programInput && searchPrograms.length > 0 ?
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.ResultTitle>
                            Results
                        </textBoxStyle.ResultTitle>
                        {
                            searchPrograms.map((searchProgramsMap, index : number)=>{
                                return(
                                    <Fragment key={index}>
                                        <textBoxStyle.SearchItem
                                            onClick={()=>searchProgramClick(searchProgramsMap)}
                                        >
                                            {searchProgramsMap.name}
                                        </textBoxStyle.SearchItem>
                                            <hr/>
                                    </Fragment>
                                )
                            })
                        }
                    </textBoxStyle.SearchContainer> :
                    <></>
                }
                {
                    programInput && searchPrograms.length <= 0 ?   
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.NoResults>
                            No Results found
                        </textBoxStyle.NoResults>
                    </textBoxStyle.SearchContainer>:
                    <></>
                }

                {/* courses */}
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.ProgamsTitle>
                        Courses
                    </textBoxStyle.ProgamsTitle>
                    <textBoxStyle.ProgramContainer>
                        {
                            courses.map((coursesMap, index : number)=>{
                                return(
                                    <textBoxStyle.ProgramHeads 
                                        onClick={()=>courseClick(coursesMap)}
                                        key={index}>
                                        {coursesMap.courseName}
                                        <MdCancel
                                            size={"16px"}
                                            opacity={0.5}
                                        />
                                    </textBoxStyle.ProgramHeads>
                                )
                            })
                        }
                        <textBoxStyle.ProgramInput
                            value={courseInput}
                            onChange={(e)=>setCourseInput(e.target.value)}
                            placeholder='search course name'
                        />
                    </textBoxStyle.ProgramContainer>
                </textBoxStyle.PossibleAnswers>

                {/* courses search container */}
                {
                    courseInput && searchCourses.length > 0 ?
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.ResultTitle>
                            Results
                        </textBoxStyle.ResultTitle>
                        {
                            searchCourses.map((searchCoursesMap, index : number)=>{
                                return(
                                    <Fragment key={index}>
                                        <textBoxStyle.SearchItem
                                            onClick={()=>searchCourseClick(searchCoursesMap)}
                                        >
                                            {searchCoursesMap.courseName}
                                        </textBoxStyle.SearchItem>
                                            <hr/>
                                    </Fragment>
                                )
                            })
                        }
                    </textBoxStyle.SearchContainer> :
                    <></>
                }
                {
                    courseInput && searchCourses.length <= 0 ?   
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.NoResults>
                            No Results found
                        </textBoxStyle.NoResults>
                    </textBoxStyle.SearchContainer>:
                    <></>
                }

                {/* topics */}
                <textBoxStyle.PossibleAnswers>
                    <textBoxStyle.ProgamsTitle>
                        Topics
                    </textBoxStyle.ProgamsTitle>
                    <textBoxStyle.ProgramContainer>
                        {
                            topics.map((topicsMap, index : number)=>{
                                return(
                                    <textBoxStyle.ProgramHeads 
                                        onClick={()=>topicClick(topicsMap)}
                                        key={index}>
                                        {topicsMap.name}
                                        <MdCancel
                                            size={"16px"}
                                            opacity={0.5}
                                        />
                                    </textBoxStyle.ProgramHeads>
                                )
                            })
                        }
                        <textBoxStyle.ProgramInput
                            placeholder='search topic name'
                            value={topicInput}
                            onChange={(e)=>setTopicInput(e.target.value)}
                        />
                    </textBoxStyle.ProgramContainer>
                </textBoxStyle.PossibleAnswers>

                {/* program search container */}
                {
                    topicInput && searchTopics.length > 0 ?
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.ResultTitle>
                            Results
                        </textBoxStyle.ResultTitle>
                        {
                            searchTopics.map((searchTopicsMap, index : number)=>{
                                return(
                                    <Fragment key={index}>
                                        <textBoxStyle.SearchItem
                                            onClick={()=>searchTopicClick(searchTopicsMap)}
                                        >
                                            {searchTopicsMap.name}
                                        </textBoxStyle.SearchItem>
                                            <hr/>
                                    </Fragment>
                                )
                            })
                        }
                    </textBoxStyle.SearchContainer> :
                    <></>
                }
                {
                    topicInput && searchTopics.length <= 0 ?   
                    <textBoxStyle.SearchContainer>
                        <textBoxStyle.NoResults>
                            No Results found
                        </textBoxStyle.NoResults>
                    </textBoxStyle.SearchContainer>:
                    <></>
                }
                <textBoxStyle.SaveQuestion
                    onClick={()=>submitHandler()}
                >
                    SAVE QUESTION
                </textBoxStyle.SaveQuestion>
            </textBoxStyle.Main>
        </>
    )
}

export default TextBox
