import styled from "styled-components";
import { minimumWidth } from "../../utils/types";

export const Main = styled.div.attrs({
    className : `w-full flex justify-center mt-[100px] text-sm w-full `
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
`

export const Head = styled.div.attrs({
    className : `Head cursor-default`
})``

export const title = styled.div.attrs({
    className : `title font-bold text-base `
})``

export const Subtitle = styled.div.attrs({
    className : `Subtitle text-[11px] font-semibold flex mb-[10px]`
})`
    color : ${({theme}) => theme.colors.text.dark.tetiary};
`

export const Switcher = styled.div.attrs({
    className : `Switcher flex p-[5px] mb-[20px] font-semibold text-xs gap-1 h-[40px] w-[130px] flex items-center justify-center rounded-full`
})
`
    color : ${({theme}) => theme.colors.text.light.white};
    background : ${({theme}) => theme.colors.background.light.primary};
`

export const Mcqs = styled.div.attrs({
    className : `Mcqs w-full h-full cursor-pointer duration-300 rounded-full flex items-center justify-center`
})<{mcqs? : boolean}>
`
    &:hover{
        background : ${({theme, mcqs}) => !mcqs && theme.colors.background.light.secondary};
    }
    color : ${({theme, mcqs}) => !mcqs && theme.colors.text.dark.primary};
    background : ${({theme, mcqs}) => mcqs && theme.colors.main.primary};
`

export const Test = styled.div.attrs({
    className : `Test w-full h-full cursor-pointer duration-500 rounded-full flex items-center justify-center`
})<{mcqs? : boolean}>
`
    &:hover{
        background : ${({theme, mcqs}) => mcqs && theme.colors.background.light.secondary};
    }
    color : ${({theme, mcqs}) => mcqs && theme.colors.text.dark.primary};
    background : ${({theme, mcqs}) => !mcqs && theme.colors.main.primary};
`

export const Body = styled.div.attrs({
    className : `Body flex gap-[20px] justify-between w-full`
})``

export const Left = styled.div.attrs({
    className : `Left w-full rounded-[10px] flex flex-col gap-[20px]`
})`
`

export const Right = styled.div.attrs({
    className : `Right w-[350px] flex flex-col gap-[20px]`
})`
    
`

export const Ads = styled.div.attrs({
    className : `Ads w-full h-[400px] rounded-[10px] flex flex-col justify-center items-center`
})`
    background : ${({theme}) => theme.colors2.gray.gray8};
    border : ${({theme}) => `0.5px solid ${theme.colors2.main.primary}1a`};
`

export const nameHere = styled.div.attrs({
    className : ``
})`
`

export const Difficulty = styled.div.attrs({
    className : ` Difficulty w-full rounded-[5px] w-[150px] 
    h-[45px] p-[10px] flex flex-col justify-center cursor-pointer`
 })`
     background : ${({theme}) => `${theme.colors2.gray.gray7}`};
     &:hover{
        opacity : 0.6;
     }
 `