import { IconType } from 'react-icons/lib'
import * as inputStyle from './textArea.style'
import { AppTypography } from '../../../styles/global'
import theme from '../../../styles/theme'
import { PiWarningCircleBold } from 'react-icons/pi'
import { Input } from 'antd'
import { TypographySize } from '../../../styles/style.types'

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
    inputType? : 'textArea' | 'normal',
    maxLength? : number
}

interface inputProps extends inputStyleProps {
    placeholder : string,
    value : string,
    setState : React.Dispatch<React.SetStateAction<string>>,
    required? : boolean,
    type? : 'text' | 'password' | 'email'
}

const TextArea = ({
    PreIcon, PostIcon, placeholder, setState, required, errorMessage, color, background, colorTheme, border,
    id, radius, padding, maxWidth, size, shadow, textSize, textBold, disabled, value, type, inputType, maxLength
} : inputProps) => {

    const getStyleProps : inputStyleProps = {
        PreIcon, PostIcon, color, errorMessage, background, colorTheme, border, id,
        radius, padding, maxWidth, size, shadow, textSize, textBold, disabled, inputType
    }

    return (
        <inputStyle.Main>
            <Input.TextArea
                showCount
                maxLength={maxLength ?? 500}
                value={value}
                required={required}
                disabled={disabled}
                onChange={(e)=>setState(e.target.value)}
                placeholder={placeholder}
                style={{
                    height: size?.height ?? 120,
                    width : size?.width,
                    padding, 
                    fontSize : textSize ? TypographySize?.[textSize] : TypographySize.sm,
                    color,
                    border,
                    background,
                    borderRadius : `${radius}px`,
                }}
            />
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

export default TextArea