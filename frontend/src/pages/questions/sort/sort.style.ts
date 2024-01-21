import styled from "styled-components";

export const Main = styled.div.attrs({
   className : ` Main w-full p-[10px] rounded-[5px] flex flex-col gap-[5px]`
})`
    background : ${({theme}) => theme.colors2.gray.gray9};
    border : ${({theme}) => `0.5px solid ${theme.colors2.main.primary}1a`};
`

export const Difficulty = styled.div.attrs({
   className : ` Difficulty w-full rounded-[5px] h-[45px] p-[10px] flex flex-col justify-center`
})`
    background : ${({theme}) => `${theme.colors2.gray.gray6}80`};
`