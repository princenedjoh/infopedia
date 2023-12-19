import { IconType } from "react-icons"

export type inputValuesType = {
    title : string,
    type : "text" | "password" | "email" | undefined,
    placeholder? : string,
    icon? : IconType,
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}