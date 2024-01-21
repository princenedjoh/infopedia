import styled from "styled-components";

export const Main = styled.div.attrs({
   className : ` Main w-full p-[10px] rounded-[5px] flex flex-col gap-[5px] `
})`
    background : ${({theme}) => theme.colors2.gray.gray9};
    border : ${({theme}) => `0.5px solid ${theme.colors2.main.primary}1a`};
`