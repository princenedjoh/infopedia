import { Chip } from "@mui/material"
import { Flex, AppTypography } from "../../../styles/global"
import theme from "../../../styles/theme"
import { useState } from "react"

const Topics = () => {

    const [topics, setTopics] = useState([
        'Python', 'Introduction to mechanicsIntroduction to mechanicsIntroduction to mechanicsIntroduction to mechanics', 'Ergonomics', 'astrophysics'
    ])

    return (
        <Flex gap={20} maxWidth='200px'>
            <AppTypography
                textColor={theme.colors2.gray.gray2}
            >
                Topics
            </AppTypography>
            {
                topics.map((chip, index : number) => {
                    return (
                        <Chip
                            size='small'
                            onClick={()=>{}}
                            key={index}
                            label={
                            <AppTypography
                                ellipsis
                                maxLines={1}
                                textColor={theme.colors2.gray.gray2}
                            >
                                {chip}
                            </AppTypography>
                            } 
                        />
                    )
                })
            }
        </Flex>
    )
}

export default Topics