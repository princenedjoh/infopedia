import Input from '../../../components/UI/input/input'
import SortIcon from '../../../components/sortIcon/sortIcon';
import { AppTypography, Flex } from '../../../styles/global'
import theme from '../../../styles/theme';
import * as sortStyle from './sort.style'
import { Difficulty } from './sort.style';
import { FaGear } from "react-icons/fa6";

const Sort = () => {
    return (
        <sortStyle.Main>
            <AppTypography>
                Sort
            </AppTypography>
            <sortStyle.Difficulty>
                <Flex justify='space-between' align='center'>
                    <Flex align='center' width='fit-content'>
                        <FaGear 
                            color={theme.colors2.gray.gray3}
                        />
                        <AppTypography
                            textColor={theme.colors2.gray.gray3}
                        >
                            Difficulty
                        </AppTypography>
                    </Flex>
                    <SortIcon />
                </Flex>
            </sortStyle.Difficulty>
        </sortStyle.Main>
    )
}

export default Sort