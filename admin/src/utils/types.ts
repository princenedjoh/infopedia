import { IconType } from "react-icons"
import { TypographySize } from '../styles/style.types';

export type inputValuesType = {
    title : string,
    type : "text" | "password" | "email" | undefined,
    placeholder? : string,
    icon? : IconType,
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}

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

export interface tagType {
    id : string, name : string
}