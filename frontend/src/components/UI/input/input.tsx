import { Input as AntdInput } from 'antd';
import * as inputStyle from './input.style'
import { IconType } from 'react-icons';
import { TypographySize } from '../../../styles/style.types';
import './antd.css'
import theme from '../../../styles/theme';

export interface inputStyleProps {
    color?: string
    background?: string
    border?: string
    PreIcon?: IconType
    PostIcon?: IconType
    id?: string
    radius?: number
    padding?:string
    maxWidth?:string
    size?: {
      width?: string
      height?: string
    }
    textSize?: TypographySize
    disabled?: boolean,
    errorMessage? : string | null,
    placeholder? : string,
    required? : boolean,
    type? : 'text' | 'password' | 'email'
}
interface inputProps extends inputStyleProps {
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>,
}

const Input = ({
    PreIcon, PostIcon, placeholder, setValue, required, errorMessage, color, background, border,
    id, radius, padding, maxWidth, size, textSize, disabled, value, type
} : inputProps) => {

    const handleValueChange = (value : any) => {
        setValue(value.target.value)
    }

    return (
        <AntdInput 
            prefix={
                PreIcon && 
                <PreIcon 
                    style={{marginRight : '4px'}}
                    color={color ?? theme.colors2.gray.gray3}
                />
            }
            suffix={
                PostIcon && 
                <PostIcon 
                    color={color ?? theme.colors2.gray.gray3}
                />
            }
            allowClear
            disabled={disabled}
            value={value}
            onChange={handleValueChange}
            placeholder={placeholder}
            required={required}
            color={color}
            type={type}

            style={{
                width : size?.width ?? '100%',
                height : size?.height ?? '43px',
                background : background,
                border,
                borderRadius : radius ? `${radius}px` : '5px',
                padding : padding,
                maxWidth : maxWidth,
                fontSize : textSize
            }}
        />
    )
}

export default Input