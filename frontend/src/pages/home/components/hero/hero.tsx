import { Chip } from '@mui/material'
import * as i from '../../../../utils/defaultImports'
import * as heroStyle from './hero.style'
import Herocard from '../card/card'

const Hero = () => {
    return (
        <i.Flex
            direction='column'
            align='center'
        >
            <heroStyle.Main>
                <i.Flex 
                    width={`${i.minimumWidth}px`}
                    justify='center'
                    align='center'
                    margin='-20px 0 0 0'
                    z={1}
                >
                    <i.Flex
                        direction='column'
                        align='center'
                        width='60%'
                    >
                        <Chip
                            size='small'
                            label={
                                <i.AppTypography
                                textColor={i.theme.colors2.gray.gray3}
                                    size={i.TypographySize.xs}
                                    bold={i.TypographyBold.md}
                                    ellipsis
                                    maxLines={1}
                                >
                                    Education
                                </i.AppTypography>
                        } />
                        <i.AppTypography
                            size={i.TypographySize.xl}
                            lineHeight={1.2}
                            textAlign='center'
                            textColor={i.theme.colors2.main.primary}
                        >
                            <b>PrepRoom</b>, Your ultimate exam
                            preparation companion
                        </i.AppTypography>
                        <i.AppTypography
                            textAlign='center'
                            textColor={i.theme.colors2.gray.gray3}
                        >
                            Welcome to preproom, the go-to app for students seeking to ace their exams 
                            and excel in their studies!
                            Whether you’re preparing for a test, quiz or a crucial exam our app provides
                            a comprehensive platform to enhance your
                            learning experience
                        </i.AppTypography>
                        <i.Flex width='fit-content'>
                            <i.PrimaryButton
                                size={{
                                    width : 'fit-content',
                                    height : 'fit-content'
                                }} 
                                type='button'
                                text='Solve Problems'
                                radius={100}
                            />
                            <i.Button 
                                type='button'
                                text='Take a test'
                                variant='text'
                                radius={100}
                                color={i.theme.colors2.main.primary}
                            />
                        </i.Flex>
                    </i.Flex>
                    {/* <i.Flex width='fit-content'>
                        <heroStyle.CoverImage></heroStyle.CoverImage>
                    </i.Flex> */}
                </i.Flex>
            </heroStyle.Main>
            <Herocard/>
        </i.Flex>
    )
}

export default Hero