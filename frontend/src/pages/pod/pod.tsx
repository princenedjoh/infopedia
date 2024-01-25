import { Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import * as podStyle from './pod.style'

const Pod = () => {
    return (
        <podStyle.Main>
            <Flex width={`${minimumWidth}px`}>
                POD
            </Flex>
        </podStyle.Main>
    )
}

export default Pod