import { Chip } from "@mui/material"
import * as i from '../../../../utils/defaultImports'
import { useState } from "react"

const Topics = () => {

    const [topics, setTopics] = useState([
        'Python', 'Introduction to mechanicsIntroduction to mechanicsIntroduction to mechanicsIntroduction to mechanics', 'Ergonomics', 'astrophysics',
        'Python', 'Introduction to mechanicsIntroduction to mechanicsIntroduction to mechanicsIntroduction to mechanics', 'Ergonomics', 'astrophysics',
        'Python', 'Ergonomics', 'astrophysics', 'Python', 'Ergonomics', 'astrophysics',
    ])

    return (
        <i.Flex>
            <i.AppTypography
                textColor={i.theme.colors2.gray.gray2}
            >
                Topics
            </i.AppTypography>
            {
                topics.map((chip, index : number) => {
                    return (
                        <i.Flex
                            width='fit-content'
                            maxWidth='120px'
                        >
                            <Chip
                                size='small'
                                onClick={()=>{}}
                                key={index}
                                label={
                                <i.AppTypography
                                    ellipsis
                                    maxLines={1}
                                    textColor={i.theme.colors2.gray.gray2}
                                >
                                    {chip}
                                </i.AppTypography>
                                } 
                            />
                        </i.Flex>
                    )
                })
            }
        </i.Flex>
    )
}

export default Topics