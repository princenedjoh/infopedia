import { Flex } from '../../../../styles/global'
import { minimumWidth } from '../../../../utils/types'
import * as testConfigStyle from './testConfig.style'
import * as i from '../../../../utils/defaultImports'
import { AiFillSafetyCertificate } from "react-icons/ai";
import TestCards from './components/card/card';

const TestConfig = () => {
    return (
        <testConfigStyle.Main>
            <testConfigStyle.TopContainer>
                <Flex
                    width='fit-content'
                    direction='column'
                    gap={4}
                    align='center'
                    margin='-70px 0 0 0'
                >
                    <AiFillSafetyCertificate 
                        color={i.theme.colors2.main.primary}
                        size='25px'
                    />
                    <i.AppTypography
                        textColor={i.theme.colors2.main.primary}
                        size={i.TypographySize.lg}
                        bold={i.TypographyBold.md}
                    >
                        Take a test
                    </i.AppTypography>
                </Flex>
            </testConfigStyle.TopContainer>
            <i.Flex
                justify='center'
            >
                <TestCards />
            </i.Flex>
            <i.Flex
                width={`${i.minimumWidth}px`}
                direction='column'
            >
                <i.AppTypography
                    textColor={i.theme.colors2.main.primary}
                    size={i.TypographySize.md2}
                >
                    Test History
                </i.AppTypography>
                <i.Hr />
            </i.Flex>
        </testConfigStyle.Main>
    )
}

export default TestConfig