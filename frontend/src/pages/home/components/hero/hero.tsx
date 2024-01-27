import { Chip } from '@mui/material'
import * as i from '../../../../utils/defaultImports'
import * as heroStyle from './hero.style'

const Hero = () => {
    return (
        <heroStyle.Main>
            <i.Flex 
                width={`${i.minimumWidth}px`}
                justify='space-betweeen'
            >
                <i.Flex
                    direction='column'
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
                        bold={i.TypographyBold.lg}
                        textColor={i.theme.colors2.main.primary}
                    >
                        Preproom Your ultimate exam
                        preparation companion
                    </i.AppTypography>
                    <i.AppTypography
                        size={i.TypographySize.sm2}
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
                            text='Solve Problems'
                            variant='text'
                            radius={100}
                        />
                    </i.Flex>
                </i.Flex>
                <i.Flex>
                    <heroStyle.CoverImage />
                </i.Flex>
            </i.Flex>
        </heroStyle.Main>
    )
}

export default Hero