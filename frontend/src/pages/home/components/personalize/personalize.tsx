import { Avatar } from 'antd'
import * as i from '../../../../utils/defaultImports'
import * as personalizeStyle from './personalize.style'
import { FaFileInvoice } from "react-icons/fa6";
import Topics from '../topics/topics';
import {ReactComponent as Illustration} from '../../../../assets/images/study2.svg'

const Personalize = () => {
    
    const [data, setData] = i.useState([
        {
            icon : FaFileInvoice,
            title : 'Efficeient Preparation',
            text : 'We ensure focused and efficient preparation that aligns with your individual needs'
        },
        {
            icon : FaFileInvoice,
            title : 'Personalize your studies',
            text : 'Tailor your study sessions by selecting specific topics, setting study goals and creating a personalized study plan'
        },
        {
            icon : FaFileInvoice,
            title : 'Study anytime anywhere',
            text : 'Access PrepRoom on your favorite device, allowing you to study on the go.'
        },
        {
            icon : FaFileInvoice,
            title : 'Efficeient Preparation',
            text : 'We ensure focused and efficient preparation that aligns with your individual needs'
        }
    ])

    return (
        <personalizeStyle.Main>
            <i.Flex
                style={{
                    overflow : 'hidden'
                }}
                width={`${i.minimumWidth}px`}
            >
                <Topics />
            </i.Flex>
            <i.Flex
                width={`${i.minimumWidth}px`}
                justify='space-between'
            >
                <i.Flex 
                    width='fit-content'
                    direction='column'
                >
                    <i.AppTypography
                        size={i.TypographySize.lg2}
                        bold={i.TypographyBold.md}
                        textColor={i.theme.colors2.main.primary}
                    >
                        Personalize Your Study
                        Sessions Today!
                    </i.AppTypography>
                    <i.AppTypography>
                        Customize your study sessions by selecting specific topics and difficulty levels
                    </i.AppTypography>
                    <Illustration 
                        width={400}
                        height={400}
                    />
                </i.Flex>
                <i.Flex
                    width='fit-content'
                    direction='column'
                    gap={20}
                    position='relative'
                >
                    {
                        data.map((info, index : number) => {
                            return (
                                <personalizeStyle.Container
                                    key={index}
                                    index={index}
                                >
                                    <Avatar 
                                        style={{ 
                                            backgroundColor: i.theme.colors2.red.red5,
                                            display : 'flex',
                                            justifyContent : 'center',
                                            alignItems : 'center'
                                        }}
                                        icon={
                                            <info.icon 
                                                color={i.theme.colors2.red.red3}
                                            />
                                        }
                                    />
                                    <i.Flex direction='column'>
                                        <i.AppTypography
                                            textColor={i.theme.colors2.main.primary}
                                            bold={i.TypographyBold.md}
                                        >
                                            {info.title}
                                        </i.AppTypography>
                                        <i.AppTypography
                                            textColor={i.theme.colors2.gray.gray3}
                                        >
                                            {info.text}
                                        </i.AppTypography>
                                    </i.Flex>
                                </personalizeStyle.Container>
                            )
                        })
                    }
                    <i.PrimaryButton 
                        text='Get Started'
                        size={{
                            width : '150px',
                        }}
                        variant='outlined'
                        radius={100}
                        type='button'
                    />
                </i.Flex>
            </i.Flex>
        </personalizeStyle.Main>
    )
}

export default Personalize