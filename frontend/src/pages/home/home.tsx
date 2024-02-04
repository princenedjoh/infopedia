import * as homeStyle from './home.styled'
import '../../utils/defaultImports'
import { minimumWidth } from '../../utils/types'
import * as i from '../../utils/defaultImports'
import Hero from './components/hero/hero'
import Topics from './components/topics/topics'
import Personalize from './components/personalize/personalize'
import Benefit from './components/benefits/benefits'
import Experience from './components/experience/experience'
import Footer from '../../components/footer/footer'
import HomeTopBar from '../../components/home top bar/topBar'
import TopBar from '../../components/top bar/topBar'

const Home = () => {

  i.useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <homeStyle.Main>
      <i.Flex 
        direction='column'
        gap={200}  
      >
        <Hero />
        <Personalize />
        <Benefit />
        <Experience />
        <Footer />
      </i.Flex>
    </homeStyle.Main>
  )
}

export default Home
