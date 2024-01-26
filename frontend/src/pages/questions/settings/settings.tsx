import { useState } from 'react';
import Input from '../../../components/UI/input/input'
import SortIcon, { sortState } from '../../../components/sortIcon/sortIcon';
import { AppTypography, Flex, Hr } from '../../../styles/global'
import theme from '../../../styles/theme';
import * as settingsStyle from './settings.style'
import Dropdown, { tagType } from "../../../components/UI/input/dropdown"
import { FaGear } from "react-icons/fa6";

const Settings = () => {

    const [sortValue, setSortValue] = useState<sortState>('normal')
    const [tagValue, setTagValue] = useState('Hide all answers')
    const [tags, setTags] = useState<tagType[]>([
        {
            id : 'Show all answers',
            name : 'Show all answers'
        },
        {
            id : 'Hide all answers',
            name : 'Hide all answers'
        },
    ])

    return (
        <settingsStyle.Main
        >
            <Flex 
                width='fit-content'
                align='center'
            >
                <FaGear 
                    color={theme.colors2.gray.gray3}
                />
                <AppTypography>
                    Settings
                </AppTypography>
            </Flex>
            <Hr />
            <Dropdown 
                tags={tags}
                setValue={setTagValue}
                value={tagValue}
                color={theme.colors2.gray.gray2}
                background={`${theme.colors2.gray.gray6}80`}
                border='none'
                size={{
                    height : '47px',
                }}
            />
        </settingsStyle.Main>
    )
}

export default Settings