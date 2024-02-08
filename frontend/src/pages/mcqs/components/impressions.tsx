import { Flex, AppTypography } from "../../../styles/global"
import { TypographySize } from '../../../styles/style.types'
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsBookmarkHeartFill } from "react-icons/bs";
import * as i from '../../../utils/defaultImports'

const Impressions = () => {
    return (
        <Flex
            width='fit-content'
            align='center'
        >
            <i.ClickableTab>
                <Flex
                    width='fit-content'
                    align='center'
                    gap={3}
                >
                    <BiSolidCommentDetail 
                        color={i.theme.colors2.gray.gray3}
                    />
                    <AppTypography
                        size={i.TypographySize.xs}
                        textColor={i.theme.colors2.gray.gray3}
                    >
                        2k
                    </AppTypography>
                    <AppTypography
                        size={i.TypographySize.xs}
                    >
                        Discussion
                    </AppTypography>
                </Flex>
            </i.ClickableTab>
            <i.ClickableTab>
                <Flex
                    width='fit-content'
                    align='center'
                    gap={3}
                >
                    <BsBookmarkHeart 
                        color={i.theme.colors2.gray.gray3}
                    />
                    <Flex
                        width='fit-content'
                        margin='2px 0 0 0'
                    >
                        <AppTypography
                            size={i.TypographySize.xs}
                            textColor={i.theme.colors2.gray.gray3}
                        >
                            503
                        </AppTypography>
                    </Flex>
                    <Flex
                        width='fit-content'
                        margin='2px 0 0 0'
                    >
                        <AppTypography
                            size={i.TypographySize.xs}
                        >
                            Saved
                        </AppTypography>
                    </Flex>
                </Flex>
            </i.ClickableTab>
        </Flex>
    )
}

export default Impressions