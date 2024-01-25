import * as homeStyle from './home.styled'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'

const Home = () => {

  return (
    <homeStyle.Main>
      <Flex width={`${minimumWidth}px`}>
          Home
      </Flex>
    </homeStyle.Main>
  )
}

export default Home
