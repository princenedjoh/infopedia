import { Flex } from '../../styles/global'
import { minimumWidth } from '../../utils/types'
import * as notificationStyle from './notification.style'

const Notification = () => {
    return (
        <notificationStyle.Main>
            <Flex width={`${minimumWidth}px`}>
                Notification
            </Flex>
        </notificationStyle.Main>
    )
}

export default Notification