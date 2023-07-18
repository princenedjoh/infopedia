import styled from "styled-components";
import { Button } from 'antd';

export const Main = styled.div.attrs({
    className : `Main w-full p-[10px] pb-[2px] mb-[10px] rounded-[10px] flex flex-col gap-2`
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
    background : ${({theme}) => theme.colors.background.light.primary};
`


export const Top = styled.div.attrs({
    className : `Top flex gap-1`
})``

export const Start = styled.div.attrs({
    className : `Start px-[3px] py-[3px] pt-[2px] rounded-full 
    flex justify-center items-center gap-1 text-[11px] font-semibold w-[60px]
    cursor-pointer hover:opacity-[0.9] hover:scale-[0.99]`
})`
    color : ${({theme}) => theme.colors.text.light.white};
    background : ${({theme}) => theme.colors.buttons.green};
    `

export const End = styled.div.attrs({
    className : `End px-[5px] py-[3px] pt-[2px] rounded-full 
    flex justify-center items-center gap-1 text-[11px] font-semibold w-[60px]
    cursor-pointer hover:opacity-[0.9] hover:scale-[0.99]`
})`
    color : ${({theme}) => theme.colors.text.light.white};
    background : ${({theme}) => theme.colors.buttons.red};
    `

export const PopConfirm = styled(Button).attrs({
    className : `PropConfirm bg-red-500`
})``

export const Time = styled.div.attrs({
    className : `Time font-bold text-[20px] ml-[3px]`
})`
    color : ${({theme}) => theme.colors.main.primary};
`

export const Bottom = styled.div.attrs({
    className : `Bottom ml-[3px]`
})``

export const Progress = styled.div.attrs({
    className : ``
})``

export const Title = styled.div.attrs({
    className : `Title font-semibold text-xs`
})``

export const ProgressBar = styled.div.attrs({
    className : `ProgressBar mt-[-5px]`
})``

export const ProgressPercentage = styled.div.attrs({
    className : ``
})``

export const nameHere = styled.div.attrs({
    className : ``
})``