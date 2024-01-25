import { useState } from 'react';
import Input from '../../../components/UI/input/input'
import SortIcon, { sortState } from '../../../components/sortIcon/sortIcon';
import { AppTypography, Flex } from '../../../styles/global'
import theme from '../../../styles/theme';
import * as sortStyle from './sort.style'
import { Difficulty } from './sort.style';
import { FaGear } from "react-icons/fa6";

const Sort = () => {

    const [sortValue, setSortValue] = useState<sortState>('normal')
    const handleToggleSort = () => {
        sortValue == 'normal' 
            ? setSortValue('down')
            : sortValue == 'down'
            ? setSortValue('top')
            : setSortValue('normal')
    }

    return (
        <sortStyle.Main
            onClick={handleToggleSort}
        >
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
                    <SortIcon
                        sortState={sortValue}
                    />
                </Flex>
            </sortStyle.Difficulty>
        </sortStyle.Main>
    )
}

export default Sort