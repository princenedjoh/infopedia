import { useState } from 'react';
import Input from '../../../components/UI/input/input'
import SortIcon, { sortState } from '../../../components/sortIcon/sortIcon';
import { AppTypography, Flex } from '../../../styles/global'
import theme from '../../../styles/theme';
import * as sortStyle from './sort.style'
import { Difficulty } from './sort.style';
import { IoLockOpen } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";

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
            <Flex 
                width='fit-content'
                align='center'
            >
                <FaSortAmountDown 
                    color={theme.colors2.gray.gray3}
                />
                <AppTypography>
                    Sort
                </AppTypography>
            </Flex>
            <sortStyle.Difficulty>
                <Flex justify='space-between' align='center'>
                    <Flex align='center' width='fit-content'>
                        <IoLockOpen 
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