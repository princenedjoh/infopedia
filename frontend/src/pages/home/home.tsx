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

const Home = () => {

  i.useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <homeStyle.Main>
      <Hero />
      <i.Hr/>
      <i.Flex
        width={`${minimumWidth}px`}
      >
        <Topics />
      </i.Flex>
      <i.Hr/>
      <Personalize />
      <Benefit />
      <Experience />
      <Footer />
    </homeStyle.Main>
  )
}

export default Home
