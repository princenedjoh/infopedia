import { Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import * as homeStyle from './home.style'
import * as i from '../../utils/defaultImports'

const Home = () => {
  return (
    <>
        <homeStyle.Main>
            <Flex
              width={`${minimumWidth}px`}
              justify='space-between'
            >
              <i.AppTypography>
                home
              </i.AppTypography>
            </Flex>
        </homeStyle.Main>
    </>
  )
}

export default Home
