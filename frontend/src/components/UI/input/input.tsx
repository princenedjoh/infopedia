import { IconType } from 'react-icons/lib'
import * as inputStyle from './input.style'
import { AppTypography } from '../../../styles/global'
import theme from '../../../styles/theme'
import { PiWarningCircleBold } from 'react-icons/pi'
import { Input as AntdInput } from 'antd';
import './antd.style.css'

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
      width?: string
      height?: string
    }
    shadow?: boolean
    textSize?: 'xs' | 'sm' | 'md' | 'lg'
    textBold?: 'sm' | 'md' | 'lg'
    disabled?: boolean,
    errorMessage? : string | null,
    variant? : 'outlined' | 'filled' | 'borderless'
    allowClear? : boolean
}

interface inputProps extends inputStyleProps {
    placeholder : string,
    value : string,
    setState : React.Dispatch<React.SetStateAction<string>>,
    required? : boolean,
    type? : 'text' | 'password' | 'email'
}

const Input = ({
    PreIcon, 
    PostIcon, 
    placeholder, 
    setState, 
    required, 
    errorMessage,
    color, 
    background, 
    colorTheme, 
    border,
    id, 
    radius,
    padding,
    maxWidth,
    size,
    shadow,
    textSize,
    textBold,
    disabled,
    value,
    type,
    variant,
    allowClear
} : inputProps) => {

    const getStyleProps : inputStyleProps = {
        PreIcon, 
        PostIcon, 
        color, 
        errorMessage, 
        background, 
        colorTheme, 
        border, 
        id,
        radius, 
        padding, 
        maxWidth, 
        size, 
        shadow, 
        textSize, 
        textBold, 
        disabled,
        variant
    }

    return (
        <inputStyle.Main>
            {
                type === 'password' ?
                <AntdInput.Password 
                    size="large"
                    placeholder={placeholder}
                    prefix={PreIcon && <PreIcon size={"13px"} color={theme.colors2.gray.gray3} />}
                    suffix={PostIcon && <PostIcon size={"13px"} color={theme.colors2.gray.gray3} />}
                    status={errorMessage ? 'error' : ''}
                    allowClear={allowClear ?? true}
                    value={value}
                    onChange={(e)=>setState(e.target.value)}
                    style={{
                        color,
                        borderRadius : radius ? `${radius}px` : '5px',
                        padding,
                        maxWidth,
                        background,
                        border,
                        width : size?.width,
                        height : size?.height ?? '47px',
                        fontSize : '12px'
                    }}
                />
                :
                <AntdInput 
                    size="large"
                    placeholder={placeholder}
                    prefix={PreIcon && <PreIcon size={"13px"} color={theme.colors2.gray.gray3} />}
                    suffix={PostIcon && <PostIcon size={"13px"} color={theme.colors2.gray.gray3} />}
                    status={errorMessage ? 'error' : ''}
                    allowClear={allowClear ?? true}
                    value={value}
                    onChange={(e)=>setState(e.target.value)}
                    style={{
                        color,
                        borderRadius : radius ? `${radius}px` : '5px',
                        padding,
                        maxWidth,
                        background,
                        border,
                        width : size?.width,
                        height : size?.height ?? '47px',
                        fontSize : '12px'
                    }}
                />
            }
            {
                errorMessage && 
                <inputStyle.ErrorMessage>
                    <div><PiWarningCircleBold /></div>
                        <AppTypography style={{marginTop : "-2px"}} textColor={theme.colors2.red.red3}> 
                            { errorMessage} 
                        </AppTypography>
                </inputStyle.ErrorMessage>
            }
        </inputStyle.Main>
    )
}

export default Input