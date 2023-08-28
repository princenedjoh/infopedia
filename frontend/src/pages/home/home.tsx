import * as homeStyle from './home.styled'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/auth/login')
  },[])

  return (
    <homeStyle.Main>
      home
    </homeStyle.Main>
  )
}

export default Home
