import { useState, useEffect } from 'react'
import { AppTypography, Flex } from '../../../styles/global'
import { TypographyBold } from '../../../styles/style.types'
import theme from '../../../styles/theme'
import Input from '../input/input'
import * as tagsStyle from './tags.style'
import { GiCancel } from 'react-icons/gi'
import { Select, type SelectProps } from 'antd';
import { inputStyleProps } from '../input/dropdown'
import './antd.css'

interface tagType {
    id : string, name : string
}
interface tagsInterface extends Partial<inputStyleProps> {
    tags : tagType[],
    setTags : React.Dispatch<React.SetStateAction<tagType[]>>
    selectedTags : tagType[],
    setSelectedTags : React.Dispatch<React.SetStateAction<tagType[]>>
}

const Tags = ({tags, setTags, selectedTags, setSelectedTags} : tagsInterface) => {

    const pushTags = (tag : tagType) => {
        for(let i of selectedTags){
            if(i === tag) return false
        }
        let tagsCopy = selectedTags
        tagsCopy.push(tag)
        setSelectedTags([...tagsCopy])
    }

    const handleChange = (ids: string[], options : any) => {
        if(ids.length < 1)
            setSelectedTags([])
        for(let id of ids){
            const selectedTagsCopy : tagType[] = options.map((option : {value : string, label : string}) => {
                return {
                    id : option.value,
                    name : option.label
                }
            })
            setSelectedTags([...selectedTagsCopy])
        }
    }
    const options: SelectProps['options'] = tags.map((item) => {
        return {
            value : item.id,
            label : item.name
        }
    })

    return (
            <Select
                mode="multiple"
                style={{ 
                    width: '100%',
                    minHeight : "47px",
                    fontSize : '12px'
                 }}
                filterOption={
                    (value, option) => 
                        (option?.label ?? '')
                        .toString()
                        .toLowerCase()
                        .includes(
                            value.toString()
                            .toLowerCase()
                        )
                }
                value={selectedTags?.map(tag => `${tag?.id}`)}
                placeholder="Search or select"
                onChange={handleChange}
                options={options}
            />
    )
}

export default Tags