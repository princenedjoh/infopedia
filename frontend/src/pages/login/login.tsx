import { Link, useNavigate } from 'react-router-dom'
import { LogoText } from '../../components/top bar/topBar'
import * as loginStyle from './login.styled'
import { Fragment, useState } from 'react'
import { RiLockPasswordFill } from 'react-icons/ri'
import svgs from '../../assets'
import { IoEnter } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import theme from '../../styles/theme'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../components/reactToastify/toastifyCustomStyles.css"
import { BASE_URL } from '../../variables/variables'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const data = {
        email : email,
        password : password
    }

    const cookies = new Cookies()
    const submitHandler = async (e:any) =>{
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, data,
            {
                validateStatus: () => true
            })
            if(response.status === 200){
                toast.success(
                    "Login Successfull",
                    {
                        hideProgressBar : true,
                        closeOnClick : true
                    }
                )
                const {accessToken} = response.data
                cookies.set('jwtToken', accessToken);
                navigate("/questions")
            }
            else if(response.status === 404){
                toast.error(
                    "Invalid Credentials",
                    {
                        hideProgressBar : true,
                        closeOnClick : true
                    }
                )
            }
        } catch (error) {
            toast.error(
                "Error Signing in, Please try again later",
                {
                    hideProgressBar : true,
                    closeOnClick : true
                }
            )
        }
    }

    const inputValues = [
        {
            title : "Email",
            type : "email",
            placeholder : "email",
            icon : MdEmail,
            value : email,
            setValue : setEmail
        },
        {
            title : "Password",
            type : "password",
            placeholder : "Password",
            icon : RiLockPasswordFill,
            value : password,
            setValue : setPassword
        },
    ]

    const [terms, setTerms] = useState([
        {
            name : 'Terms',
            route : '/usage/terms'
        },
        {
            name : 'Privacy',
            route : '/usage/privacy'
        },
        {
            name : 'Contact',
            route : '/contact'
        }
    ])

    return(
        <loginStyle.Main>
            <ToastContainer/>
            <loginStyle.Head>
                <loginStyle.Avatar
                    src={svgs.logoImg}
                />
                <loginStyle.Title>
                    {`Login`}&nbsp;{`•`}&nbsp;<LogoText/>
                </loginStyle.Title>
            </loginStyle.Head>
            <loginStyle.Container
                onSubmit={(e)=>submitHandler(e)}
            >
                {
                    inputValues.map((inputValuesMap, index:number)=>{
                        return(
                            <Fragment key={index}>
                                <loginStyle.InputContainer>
                                    <loginStyle.InputFlex>
                                        <loginStyle.InputFlexLeft>
                                            <inputValuesMap.icon
                                                size={"16px"}
                                                opacity={0.8}
                                            />
                                            <loginStyle.InputValue
                                                value={inputValuesMap.value}
                                                onChange={
                                                    (e)=>inputValuesMap.setValue(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                placeholder={inputValuesMap.placeholder}
                                                type={inputValuesMap.type}
                                            />
                                        </loginStyle.InputFlexLeft>
                                    </loginStyle.InputFlex>
                                </loginStyle.InputContainer>
                            </Fragment>
                        )
                    })
                }
                <loginStyle.Submit
                    type='submit'
                >
                    Login <IoEnter
                        size={"20px"}
                        color={theme.colors.background.light.white}
                    />
                </loginStyle.Submit>
            </loginStyle.Container>
            <loginStyle.HaveAnAccount>
                New to PrepRoom? 
                <loginStyle.Link>
                    <Link to={"/auth/signUp"}>Sign Up</Link>
                </loginStyle.Link>
            </loginStyle.HaveAnAccount>
            <loginStyle.Terms>
                {
                    terms.map((termsMap, index : number)=>{
                        return(
                            <Link 
                                key={index}
                                to={termsMap.route}>
                                {termsMap.name}
                            </Link>
                        )
                    })
                }
            </loginStyle.Terms>
        </loginStyle.Main>
    )
}

export default Login