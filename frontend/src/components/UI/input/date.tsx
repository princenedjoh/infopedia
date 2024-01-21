import { IconType } from 'react-icons/lib'
import * as dateStyle from './date.style'
import { AppTypography } from '../../../styles/global'
import theme from '../../../styles/theme'
import { PiWarningCircleBold } from 'react-icons/pi'

export interface dateStyleProps {
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
}

interface inputProps extends dateStyleProps {
    placeholder? : string,
    value : string,
    setState : React.Dispatch<React.SetStateAction<string>>,
    required? : boolean
}

const Date = ({
    PreIcon, PostIcon, placeholder, setState, required, errorMessage, color, background, colorTheme, border,
    id, radius, padding, maxWidth, size, shadow, textSize, textBold, disabled, value
} : inputProps) => {

    const getStyleProps : dateStyleProps = {
        PreIcon, PostIcon, color, errorMessage, background, colorTheme, border, id,
        radius, padding, maxWidth, size, shadow, textSize, textBold, disabled
    }

    return (
        <dateStyle.Main>
            <dateStyle.MainWrap {...getStyleProps}>
                {PreIcon && <PreIcon size={"13px"}/>}
                <dateStyle.Input type={'date'} placeholder={placeholder} background={background}
                value={value} required={required} onChange={(e)=>setState(e.target.value)}/>
                {PostIcon && <PostIcon size={"13px"} />}
            </dateStyle.MainWrap>
            {
                errorMessage && 
                <dateStyle.ErrorMessage>
                    <div><PiWarningCircleBold /></div>
                        <AppTypography style={{marginTop : "-2px"}} textColor={theme.colors2.red.red3}> 
                            { errorMessage} 
                        </AppTypography>
                </dateStyle.ErrorMessage>
            }
        </dateStyle.Main>
    )
}

export default Date