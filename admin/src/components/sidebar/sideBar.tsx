import { Outlet } from 'react-router'
import * as sideBarStyle from './sideBar.styled'
import { RiAdminFill, RiMapPinUserFill } from 'react-icons/ri'
import { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiBankFill } from "react-icons/ri"
import { AiTwotoneFlag } from "react-icons/ai"
import { FaPaintRoller } from "react-icons/fa"
import { IoCaretForwardOutline } from 'react-icons/io5'
import { MdAdminPanelSettings, MdSupervisorAccount } from 'react-icons/md'
import axios from 'axios'

let programHover2 = false

const SideBar = () => {
    const navigate = useNavigate()

    interface coursesInterface {
        course : string,
        program : string
    }

    const [branch, setBranch] = useState([
        {
            name : 'SCIENCES',
            active : false,
            show : true,
            count : 0,
            icon : RiBankFill,
            expandable : true,
            route : "",
        },
        {
            name : 'FLAGS',
            active : false,
            show : true,
            count : 0,
            icon : AiTwotoneFlag,
            expandable : true,
            route : "",
        },
        {
            name : 'ADMINISTRATORS',
            active : false,
            show : true,
            count : 0,
            icon : MdAdminPanelSettings,
            expandable : false,
            route : '/users/administrators'
        },
        {
            name : 'SUPERVISORS',
            active : false,
            show : true,
            count : 0,
            icon : RiAdminFill,
            expandable : false,
            route : '/users/supervisors'
        },
        {
            name : 'MODERATORS',
            active : false,
            show : true,
            count : 0,
            icon : MdSupervisorAccount,
            expandable : false,
            route : '/users/moderators'
        },
    ])

    const [programs, setPrograms] = useState([
        {
            name : 'COMPUTER SCIENCE',
            branch : 'SCIENCES'
        },
        {
            name : 'ACTURIAL SCIENCE',
            branch : 'SCIENCES'
        },
        {
            name : 'OPTOMETRY',
            branch : 'SCIENCES'
        },
        {
            name : 'COMPUTER ENGINEERING',
            branch : 'ENGINEERING'
        },
        {
            name : 'COMUNICATION DESIGN',
            branch : 'ARTS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'OPTOMETRY',
            branch : 'BUSINESS'
        },
        {
            name : 'COMPUTER ENGINEERING',
            branch : 'BUSINESS'
        },
        {
            name : 'COMUNICATION DESIGN',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'OPTOMETRY',
            branch : 'BUSINESS'
        },
        {
            name : 'COMPUTER ENGINEERING',
            branch : 'BUSINESS'
        },
        {
            name : 'COMUNICATION DESIGN',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'OPTOMETRY',
            branch : 'BUSINESS'
        },
        {
            name : 'COMPUTER ENGINEERING',
            branch : 'BUSINESS'
        },
        {
            name : 'COMUNICATION DESIGN',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
        {
            name : 'OPTOMETRY',
            branch : 'BUSINESS'
        },
        {
            name : 'COMPUTER ENGINEERING',
            branch : 'BUSINESS'
        },
        {
            name : 'COMUNICATION DESIGN',
            branch : 'BUSINESS'
        },
        {
            name : 'LOGISTICS',
            branch : 'BUSINESS'
        },
    ])

    for(const i in branch){
        branch[i].count = 0
        for(const j in programs){
            if(programs[j].branch == branch[i].name){
                branch[i].count++
            }
        }
    }

    const [courses, setCourses] = useState([
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
        {
            course : "OPERATIONS RESEARCH",
            program : "COMPUTER SCIENCE"
        },
    ])

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
        const programs = await axios.get("http://localhost:3001/programs/getAllPrograms")
        console.log(programs.data)
    }
    useEffect(()=>{
        getPrograms()
    },[])

    const programsHover = (program : string) => {
        programHover2 = true
        let courses2 = []
        for (let i in courses){
            if (courses[i].program === program){
                courses2.push(courses[i])
            }
        }
        setCoursesToMap([...courses2])
        let showCourses2 = showCourses
        showCourses2.show = true
        setShowCourses({...showCourses2})
    }

    const branchClick = (name : string)=>{
        let branchCopy = branch
        for(const i in branchCopy){
            if(branchCopy[i].expandable){
                if(branchCopy[i].name === name){
                    branchCopy[i].active = !branchCopy[i].active
                }
                else{
                    branchCopy[i].active = false
                }
            }
            else{
                if(branchCopy[i].name === name){
                    navigate(branchCopy[i].route)
                }
            }
        }
        setBranch([...branchCopy])
    }

  return (
    <sideBarStyle.MainContainer>
      <sideBarStyle.Main>
        <sideBarStyle.Profile>
            <sideBarStyle.ProfleImg>
                <RiMapPinUserFill 
                    size={'22px'}
                />
            </sideBarStyle.ProfleImg>
            <sideBarStyle.ProfileInfo>
                <sideBarStyle.name>
                    Prince Nedjoh
                </sideBarStyle.name>
                <sideBarStyle.email>
                    princenedjoh5@gmail.com
                </sideBarStyle.email>
            </sideBarStyle.ProfileInfo>
        </sideBarStyle.Profile>
        <sideBarStyle.Branches>
            {
                branch.map((branchMap, index : number) => {
                    return(
                        <sideBarStyle.Branch
                                key={index}
                                active={branchMap.expandable? branchMap.active : false}
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
                                    {
                                        branchMap.name === "FLAGS" &&
                                        <sideBarStyle.FlagNotifications>
                                            9
                                        </sideBarStyle.FlagNotifications>
                                    }
                                </sideBarStyle.BranchLeft>
                                {
                                    branchMap.expandable &&
                                    <sideBarStyle.BranchButton
                                        active={branchMap.active}
                                    >
                                        <IoCaretForwardOutline/>
                                    </sideBarStyle.BranchButton>
                                }
                            </sideBarStyle.BranchInfo>
                            <sideBarStyle.Programs>
                                {
                                    programs.map((programMap, index : number) => {
                                        return(
                                            <Fragment key={index}>
                                                {
                                                    programMap.branch == branchMap.name &&
                                                    <sideBarStyle.Program
                                                        onMouseEnter={()=>programsHover(programMap.name)}
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
                                                        { programMap.name}
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
                            <sideBarStyle.Course key={index}>
                                {course.course}
                            </sideBarStyle.Course>
                        )
                    })
                }
            </sideBarStyle.Courses>
        </sideBarStyle.CoursesContainer>
      }
        
    </sideBarStyle.MainContainer>
  )
}

export default SideBar
