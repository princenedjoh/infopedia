import { images } from '../../../../assets'
import * as i from '../../../../utils/defaultImports'
import * as experienceStyle from './experirence.style'
import { GiPowerLightning } from "react-icons/gi";

const Experience = () => {

    const [data, setData] = i.useState([
        {
            image : images.gradHat,
            title : 'Boost your performance',
            text : 'Leverage detailed insights to focus your efforts on areas that need improvements',
            color : i.theme.colors2.main.primary
        },
        {
            image : images.cert,
            title : 'Personalize your studies',
            text : 'Tailor your study sessions by selecting specific topics, setting study goals and creating a personalized study plan',
            color : i.theme.colors2.orange.orange3
        },
        {
            image : images.smartPhone,
            title : 'Study anytime anywhere',
            text : 'Access PrepRoom on your favorite device, allowing you to study on the go.',
            color : i.theme.colors2.green.green3
        },
    ])

    return (
        <experienceStyle.Main>
            <i.Flex 
                direction='column'
                width={`${i.minimumWidth}px`}
                align='center'
            >
                <i.Flex
                    direction='column'
                    width='fit-content'
                    align='center'
                    gap={5}
                >
                    <i.Flex
                        width='fit-content'
                        background={`${i.theme.colors2.main.primary}0d`}
                        padding='15px'
                        rounded='50%'
                    >
                        <GiPowerLightning
                            color={i.theme.colors2.main.primary}
                            size={26}
                        />
                    </i.Flex>
                    <i.AppTypography
                        size={i.TypographySize.lg2}
                        bold={i.TypographyBold.md}
                        textColor={i.theme.colors2.main.primary}
                    >
                        Experience the power of PrepRoom
                    </i.AppTypography>
                </i.Flex>
                <i.Flex 
                    width={`${i.minimumWidth}px`}
                    justify='center'
                    gap={50}
                >
                    {
                        data.map((item, index : number) => {
                            return (
                                <experienceStyle.Container
                                    background={item.color}
                                >
                                    <i.Flex
                                        key={index}
                                        direction='column'
                                        align='center'
                                        padding='30px'
                                        width='fit-content'
                                    >
                                        <experienceStyle.ImageContainer
                                            bgURL={item.image}
                                        >

                                        </experienceStyle.ImageContainer>
                                        <i.AppTypography
                                            size={i.TypographySize.md2}
                                            bold={i.TypographyBold.md}
                                            textColor={i.theme.colors2.main.primary}
                                        >
                                            {item.title}
                                        </i.AppTypography>
                                        <i.AppTypography
                                            textColor={i.theme.colors2.gray.gray3}
                                            textAlign='center'
                                        >
                                            {item.text}
                                        </i.AppTypography>
                                    </i.Flex>
                                </experienceStyle.Container>
                            )
                        })
                    }
                </i.Flex>
            </i.Flex>
        </experienceStyle.Main>
    )
}

export default Experience