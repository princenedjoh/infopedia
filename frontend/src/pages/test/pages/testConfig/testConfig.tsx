import { Flex } from '../../../../styles/global'
import { minimumWidth } from '../../../../utils/types'
import * as testConfigStyle from './testConfig.style'

const TestConfig = () => {
    return (
        <testConfigStyle.Main>
            <Flex width={`${minimumWidth}px`}>
                Test Config
            </Flex>
        </testConfigStyle.Main>
    )
}

export default TestConfig