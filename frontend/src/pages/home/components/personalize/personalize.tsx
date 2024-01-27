import { Avatar } from 'antd'
import * as i from '../../../../utils/defaultImports'
import * as personalizeStyle from './personalize.style'
import { FaFileInvoice } from "react-icons/fa6";

const Personalize = () => {
    return (
        <personalizeStyle.Main>
            <i.Flex
                width={`${i.minimumWidth}px`}
                justify='space-between'
            >
                <i.Flex 
                    width='fit-content'
                    direction='column'
                >
                    <i.AppTypography>
                        Personalize Your Study
                        Sessions Today!
                    </i.AppTypography>
                    <i.AppTypography>
                        Customize your study sessions by selecting specific topics and difficulty levels
                    </i.AppTypography>
                </i.Flex>
                <i.Flex
                    width='fit-content'
                    direction='column'
                    gap={20}
                >
                    {
                        [1,2,3,4,5].map((info, index) => {
                            return (
                                <i.Flex 
                                    width='fit-content'
                                    align='center'>
                                    <Avatar 
                                        style={{ 
                                            backgroundColor: i.theme.colors2.red.red5,
                                            display : 'flex',
                                            justifyContent : 'center',
                                            alignItems : 'center'
                                        }}
                                        icon={
                                            <FaFileInvoice 
                                                color={i.theme.colors2.red.red3}
                                            />
                                        }
                                    />
                                    <i.AppTypography
                                        textColor={i.theme.colors2.gray.gray3}
                                    >
                                        We ensure focused and efficient preparation that aligns
                                        with your individual needs
                                    </i.AppTypography>
                                </i.Flex>
                            )
                        })
                    }
                </i.Flex>
            </i.Flex>
        </personalizeStyle.Main>
    )
}

export default Personalize