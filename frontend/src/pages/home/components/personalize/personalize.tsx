import { Avatar } from 'antd'
import * as i from '../../../../utils/defaultImports'
import * as personalizeStyle from './personalize.style'
import { FaFileInvoice } from "react-icons/fa6";
import Topics from '../topics/topics';
import {ReactComponent as Illustration} from '../../../../assets/images/study2.svg'
import { ImPowerCord } from "react-icons/im";
import { FaLightbulb } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";

const Personalize = () => {
    
    const [data, setData] = i.useState([
        {
            icon : ImPowerCord,
            title : 'Efficeient Preparation',
            text : 'We ensure focused and efficient preparation that aligns with your individual needs',
            color : i.theme.colors2.blue.blue3
        },
        {
            icon: FaLightbulb,
            title: 'Flexible Study Schedule',
            text: 'Create a study schedule that fits your lifestyle and commitments, helping you stay organized and motivated.',
            color : i.theme.colors2.green.green3
        },
        {
            icon : IoLocationSharp,
            title : 'Study anytime anywhere',
            text : 'Access PrepRoom on your favorite device, allowing you to study on the go.',
            color : i.theme.colors2.orange.orange3
        },
        {
            icon: FaUsers,
            title: 'Peer Guidance',
            text: 'Receive guidance and support from your peers in the discussion sessions of every question.',
            color : i.theme.colors2.main.primary
        },
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
                    <i.Flex
                        justify='center'
                        margin='0 0 0 -40px'
                    >
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
                                    themeColor={info.color}
                                >
                                    <Avatar 
                                        style={{ 
                                            backgroundColor: `${info.color}33`,
                                            display : 'flex',
                                            justifyContent : 'center',
                                            alignItems : 'center',
                                            width : '55px',
                                            height : '50px'
                                        }}
                                        icon={
                                            <info.icon 
                                                color={info.color}
                                                size={30}
                                            />
                                        }
                                    />
                                    <i.Flex 
                                        direction='column'
                                        gap={3}
                                    >
                                        <i.AppTypography
                                            textColor={info.color}
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
                </i.Flex>
            </i.Flex>
        </personalizeStyle.Main>
    )
}

export default Personalize