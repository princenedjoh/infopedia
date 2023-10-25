import { Outlet } from 'react-router'
import * as sideBarStyle from './sideBar.styled'
import { RiMapPinUserFill } from 'react-icons/ri'
import { Fragment, useEffect, useState } from 'react'
import { MdScience, MdEngineering, MdBusinessCenter } from "react-icons/md"
import { TbMathSymbols } from "react-icons/tb"
import { RiPlantFill } from "react-icons/ri"
import { FaPaintRoller } from "react-icons/fa"
import { IoCaretForwardOutline } from 'react-icons/io5'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'

let programHover2 = false
const cookies = new Cookies()

const SideBar = () => {
    
    interface userDetailsType{
        firstName? : string,
        lastName? : string,
        password? : string,
        email? : string,
        gender? : string
    }
    const [userDetails, setUserDeatails] = useState<userDetailsType>()

    interface coursesInterface {
        _id: string,
        courseName : string,
        programID : string
    }
    interface programsInterface {
        _id : string,
        programName : string,
        branchID : string
        branchInfo? : {
            _id : string,
            branchName : string
        }
    }

    const [branch, setBranch] = useState([
        {
            name : 'SCIENCES',
            active : false,
            count : 0,
            icon : MdScience,
        },
        {
            name : 'ARTS',
            active : false,
            count : 0,
            icon : FaPaintRoller,
        },
        {
            name : 'ENGINEERING',
            active : false,
            count : 0,
            icon : MdEngineering,
        },
        {
            name : 'BUSINESS',
            active : false,
            count : 0,
            icon : MdBusinessCenter,
        },
        {
            name : 'MATHEMATICS',
            active : false,
            count : 0,
            icon : TbMathSymbols,
        },
        {
            name : 'AGRICULTURE',
            active : false,
            count : 0,
            icon : RiPlantFill,
        },
    ])

    const [programs, setPrograms] = useState<programsInterface[]>()

    if(programs){
        for(const i in branch){
            branch[i].count = 0
            for(const j in programs){
                if(programs[j].branchInfo?.branchName == branch[i].name){
                    branch[i].count++
                }
            }
        }
    }

    const [courses, setCourses] = useState<coursesInterface[]>()

    const [topics, setTopics] = useState([
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
        {
            topic : "Single line model",
            course : "OPERATIONS RESEARCH"
        },
    ])

    const [coursesToMap, setCoursesToMap] = useState<coursesInterface[]>([])

    const [topicsToMap, setTopicsToMap] = useState([])
    
    const [showCourses, setShowCourses] = useState({
        show : false,
        active : false
    })

    const [showTopics, setShowTopics] = useState(false)

    const getPrograms = async () => {
        try {
            const programs = await axios.get("http://localhost:3001/programs/getAllPrograms")
            setPrograms(programs.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getPrograms()
    },[])

    const getCourses = async () => {
        try {
            const course = await axios.get("http://localhost:3001/courses/getAllCourses")
            setCourses(course.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCourses()
    },[])

    const getSpecificCourses = async () => {
        const course = await axios.get("http://localhost:3001/courses/getAllCourses")
        setCourses(course.data)
        console.log(course.data)
    }

    const courseClick = () => {
        let showCourses2 = showCourses
        showCourses2.show = false
        setShowCourses({...showCourses2})
    }

    useEffect(()=>{
        const ifProgram = async () => {
            if(programs){
                let programsCopy = programs
                const getBranch = async (branchID : string) => {
                    const branch =  await axios.get("http://localhost:3001/branch/getBranch",
                    {
                        params : {
                            id : branchID
                        }
                    })
                    return (branch.data)
                }
                for(let program of programsCopy){
                    if(program.branchID){
                        const branchInfo = await  getBranch(program.branchID)
                        program.branchInfo = branchInfo
                    }
                }
            }
        }
        ifProgram()
    },[programs])

    const getUserInfo = async () => {
        try {
            const browserCookie = cookies.get("jwtToken")
            if(browserCookie){
                console.log(browserCookie)
                const userInfo = await axios.get("http://localhost:3001/users/get", {
                    headers : {
                        Authorization : `Bearer ${browserCookie}`
                    }
                })
                setUserDeatails(userInfo.data[0])
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserInfo()
    },[])

    const programsHover = (program : programsInterface) => {
        programHover2 = true
        if(courses){
            let courses2 = []
            for (let i in courses){
                if ((courses[i].programID) === program._id){
                    courses2.push(courses[i])
                }
            }
            setCoursesToMap([...courses2])
            let showCourses2 = showCourses
            showCourses2.show = true
            setShowCourses({...showCourses2})
        }
    }

    const branchClick = (name : string)=>{
        let branchCopy = branch
        for(const i in branchCopy){
            branchCopy[i].name == name ?
            branchCopy[i].active = !branchCopy[i].active :
            branchCopy[i].active = false
        }
        setBranch([...branchCopy])
    }

  return (
    <sideBarStyle.MainContainer>
      <sideBarStyle.Main>
        <sideBarStyle.Profile>
            {
                userDetails &&
                <sideBarStyle.ProfleImg>
                    <RiMapPinUserFill 
                        size={'22px'}
                    />
                </sideBarStyle.ProfleImg>
            }
            <sideBarStyle.ProfileInfo
                loggedIn={userDetails? true : false}
            >
                {
                    userDetails?
                    <>
                        <sideBarStyle.name>
                            {(`${userDetails.firstName} `).toUpperCase()} {(`${userDetails.lastName}`).toUpperCase()}
                        </sideBarStyle.name>
                        <sideBarStyle.email>
                        {`${userDetails.email}`}
                        </sideBarStyle.email>
                    </> :

                    <>
                        <Link to={"/auth/login"}>
                            <sideBarStyle.Login>
                                LOGIN
                            </sideBarStyle.Login>
                        </Link>
                    </>
                }
            </sideBarStyle.ProfileInfo>
        </sideBarStyle.Profile>
        <sideBarStyle.Branches>
            {
                branch.map((branchMap, index : number) => {
                    return(
                        <sideBarStyle.Branch
                                key={index}
                                active={branchMap.active}
                                height={(branchMap.count+1)*42}
                            >
                            <sideBarStyle.BranchInfo
                                onClick={()=>branchClick(branchMap.name)}
                                active={branchMap.active}
                            >
                                <sideBarStyle.BranchLeft>
                                    <sideBarStyle.BranchIcon>
                                        < branchMap.icon 
                                            size={"25px"}
                                        />
                                    </sideBarStyle.BranchIcon>
                                    <sideBarStyle.BranchName>
                                        {branchMap.name}
                                    </sideBarStyle.BranchName>
                                </sideBarStyle.BranchLeft>
                                <sideBarStyle.BranchButton
                                    active={branchMap.active}
                                >
                                    <IoCaretForwardOutline/>
                                </sideBarStyle.BranchButton>
                            </sideBarStyle.BranchInfo>
                            <sideBarStyle.Programs>
                                {
                                    programs &&
                                    programs.map((programMap, index : number) => {
                                        return(
                                            <Fragment key={index}>
                                                {
                                                    (programMap.branchInfo?.branchName)?.toUpperCase() === 
                                                    (branchMap.name).toUpperCase() &&
                                                    <sideBarStyle.Program
                                                        onMouseEnter={()=>programsHover(programMap)}
                                                        onMouseLeave={()=>{
                                                            programHover2 = false
                                                            setTimeout(() => {
                                                                if(!showCourses.active && !programHover2){
                                                                    let showCourses2 = showCourses
                                                                    showCourses2.show = false
                                                                    setShowCourses({...showCourses2})
                                                                }
                                                            }, 500);
                                                        }}
                                                    >
                                                        { (programMap.programName).toUpperCase() }
                                                    </sideBarStyle.Program>             
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </sideBarStyle.Programs>
                        </sideBarStyle.Branch>
                    )
                })
            }
        </sideBarStyle.Branches>
      </sideBarStyle.Main>
      {
        showCourses.show &&
        <sideBarStyle.CoursesContainer
            onMouseEnter={()=>{
                let showCourses2 = showCourses
                showCourses2.active = true
                setShowCourses({...showCourses2})
            }}
            onMouseLeave={()=>{
                let showCourses2 = showCourses
                showCourses2.active = false
                showCourses2.show = false
                setShowCourses({...showCourses2})
            }}
        >
            <sideBarStyle.Courses>
            <sideBarStyle.CourseTitle>
                Courses
            </sideBarStyle.CourseTitle>
                {
                    coursesToMap.map((course, index : number)=>{
                        return(
                            <Fragment key={index}>
                                <Link to={`${course._id}`}>
                                    <sideBarStyle.Course 
                                        key={index}
                                        onClick={()=>courseClick()}
                                    >
                                        {course.courseName.toUpperCase()}
                                    </sideBarStyle.Course>
                                </Link>
                            </Fragment>
                        )
                    })
                }
            </sideBarStyle.Courses>
        </sideBarStyle.CoursesContainer>
      }
        <Outlet/>
    </sideBarStyle.MainContainer>
  )
}

export default SideBar
