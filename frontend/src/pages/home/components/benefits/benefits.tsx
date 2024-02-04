import { Chip } from '@mui/material'
import * as i from '../../../../utils/defaultImports'
import * as benefitStyle from './benefits.style'
import { FaCircleCheck } from "react-icons/fa6";
import {ReactComponent as Illustration} from '../../../../assets/images/study1.svg'

const Benefit = () => {

    const [benefits, setBenefits] = i.useState([
        'Conquer exams together',
        'Engage with vibrant community of students',
        'Share study resources and collaborate on challenging questions'
    ])

    return (
        <benefitStyle.Main>
            <i.Flex
                width={`${i.minimumWidth}px`}
            >
                <benefitStyle.Container>
                    <i.Flex
                        position='relative'
                        align='center'
                        justify='center'
                    >
                        <i.Flex 
                            direction='column'
                            width='fit-content'
                        >
                            <i.AppTypography
                                size={i.TypographySize.lg2}
                                bold={i.TypographyBold.md}
                                textColor={i.theme.colors2.main.primary}
                                lineHeight={1.2}
                            >
                                Steady smarter not <b>Harder!</b>
                            </i.AppTypography>
                            <i.Flex>
                                <i.AppTypography
                                    size={i.TypographySize.sm2}
                                >
                                    Leverage our intelligent study tools to optimize your learning
                                    and retain information
                                </i.AppTypography>
                            </i.Flex>
                            <i.Flex direction='column'>
                                {
                                    benefits.map((benefit, index : number) => {
                                        return (
                                            <i.Flex
                                                key={index}
                                            >
                                                <FaCircleCheck 
                                                    color={i.theme.colors2.green.green3}
                                                />
                                                <i.AppTypography>
                                                    {benefit}
                                                </i.AppTypography>
                                            </i.Flex>
                                        )
                                    })
                                }
                            </i.Flex>
                            <i.PrimaryButton 
                                text='Get Started'
                                size={{
                                    width : 'fit-content',
                                    height : 'fit-content'
                                }}
                                radius={100}
                                type='button'
                            />
                        </i.Flex>
                        <benefitStyle.imageContainer>
                            <Illustration 
                                width={400}
                                height={400}
                            />
                        </benefitStyle.imageContainer>
                    </i.Flex>
                </benefitStyle.Container>
            </i.Flex>
        </benefitStyle.Main>
    )
}

export default Benefit