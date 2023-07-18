import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `Main grid gap-3 grid-cols-5 cursor-pointer w-full flex-wrap p-[10px] mb-[10px] rounded-[10px]`
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
    background : ${({theme}) => theme.colors.background.light.primary};
`

export const Container = styled.div.attrs({
    className : `Container rounded-[5px] hover:opacity-[0.8] hover:scale-[0.95] p-[4px] w-[30px] h-[40px]`
})`
    background : ${({theme}) => theme.colors.background.light.white};
`

export const InnerContainer = styled.div.attrs({
    className : `InnerContainer rounded-[3px] text-xs flex font-bold w-full h-[70%] justify-center items-center`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
`