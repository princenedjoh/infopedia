import * as cardStyle from './card.style'
import * as i from '../../../../../../utils/defaultImports'
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { GiPapers } from "react-icons/gi";
import { HiTrophy } from "react-icons/hi2";
import { Tooltip } from '@mui/material'
import { images } from '../../../../../../assets'

const TestCards = () => {

    const [mouseEnter, setMouseEnter] = i.useState(false)

    const [cardText, setCardText] = i.useState([
        {
            head : 'MCQS',
            title : "Solve multiple choice questions",
            icon : <RiCheckboxMultipleFill color={i.theme.colors2.main.primary} size='20px'/>,
            text : `Practice and test your knowledge across various subjects with a wide range of multiple choice questions.`,
            background : i.theme.colors2.main.primary,
            hover : false,
            backgroundImage : images.pattern1,
        },
        {
            head : 'Past Papers',
            title : "Unlock Success with Access to Past Papers",
            icon : <GiPapers color={i.theme.colors2.orange.orange3} size='20px'/>,
            text : "Prepare for exams and boost your confidence by accessing a vast collection of past papers.",
            background : i.theme.colors2.orange.orange3,
            hover : false,
            backgroundImage : images.pattern2,
        },
        {
            head : 'Challenges',
            title : "Sharpen Your Mind with Daily Challenges",
            icon : <HiTrophy color={i.theme.colors2.green.green3} size='20px'/>,
            text : "Challenge yourself daily with our thought-provoking exercises designed to expand your knowledge.",
            background : i.theme.colors2.green.green3,
            hover : false,
            backgroundImage : images.pattern3,
        }
    ])

    const toggleCardHover = (index : number, state : boolean) => {
        let cardTextCopy = cardText
        cardTextCopy[index].hover = state
        setCardText([...cardTextCopy])
    }

    return (
        <cardStyle.Main>
            {
                cardText.map((card, index : number) => {
                    return (
                        <i.Flex
                            position='relative'
                            width='200px'
                            onMouseEnter={()=>toggleCardHover(index, true)}
                            onMouseLeave={()=>toggleCardHover(index, false)}
                        >
                            <cardStyle.InnerContainer
                                background={card.background}
                                hover={card.hover}
                            >
                                <cardStyle.InnerWrapper
                                    hover={card.hover}
                                >
                                    <i.Flex 
                                        direction='column'
                                        align='center'
                                    >
                                        {card.icon}
                                        {
                                            !card.hover &&
                                            <i.AppTypography
                                                textColor={i.theme.colors2.gray.gray2}
                                                textAlign='center'
                                                ellipsis
                                                maxLines={1}
                                                size={i.TypographySize.sm2}
                                                bold={i.TypographyBold.md}
                                            >
                                                {card.head}
                                            </i.AppTypography>
                                        }
                                        <i.AppTypography
                                            textColor={card.background ?? i.theme.colors2.main.primary}
                                            textAlign='center'
                                            ellipsis
                                            maxLines={6}
                                            bold={i.TypographyBold.md}
                                        >
                                            {card.hover ? card.text : card.title}
                                        </i.AppTypography>
                                        <i.Button 
                                            text='Get Started'
                                            type='button'
                                            radius={100}
                                            background={card.background}
                                            color={i.theme.colors2.shades.white}
                                        />
                                    </i.Flex>
                                </cardStyle.InnerWrapper>
                            </cardStyle.InnerContainer>
                        </i.Flex>
                    )
                })
            }
        </cardStyle.Main>
    )
}

export default TestCards