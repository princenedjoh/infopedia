import { useState, useEffect } from 'react'
import { AppTypography, Flex } from '../../../styles/global'
import { TypographyBold } from '../../../styles/style.types'
import theme from '../../../styles/theme'
import Input from '../input/input'
import * as tagsStyle from './dropdown.style'
import { GiCancel } from 'react-icons/gi'
import { Select, type SelectProps } from 'antd';
import './antd.style.css'
import { IconType } from 'react-icons'

export interface tagType {
    id : string, name : string
}

export interface inputStyleProps {
    color?: string
    background?: string
    colorTheme? : string
    border?: string
    PreIcon?: IconType
    PostIcon?: IconType
    id?: string
    radius?: number
    padding?:string
    maxWidth?:string
    size?: {
        minWidth? : string,
        maxWidth? : string,
        minHeight? : string,
        maxHeight? : string,
        width?: string
        height?: string
    }
    shadow?: boolean
    textSize?: 'xs' | 'sm' | 'md' | 'lg'
    textBold?: 'sm' | 'md' | 'lg'
    disabled?: boolean,
    errorMessage? : string | null,
    show? : boolean,
    placeholder? : string
}
interface tagsInterface extends Partial<inputStyleProps> {
    tags : tagType[],
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}

const Dropdown = ({
    tags, 
    value,
    setValue,
    placeholder,
    background,
    size,
    color,
    disabled,
    PreIcon,
    PostIcon,
    border,
    radius,
    padding,
    errorMessage
} : tagsInterface) => {

    const handleChange = (value : string) => {
        setValue(value)
    }
    const options: SelectProps['options'] = tags.map((item) => {
        return {
            value : item.id,
            label : item.name
        }
    })

    return (
            <Select
                style={{ 
                    width: size?.width ?? '100%',
                    height : size?.height ?? "47px",
                    background,
                    color,
                    borderRadius : radius ? `${radius}px` : '5px',
                    fontSize : '12px',
                    border
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
                value={value}
                placeholder={placeholder ?? "Search or select"}
                onChange={handleChange}
                options={options}
            />
    )
}

export default Dropdown