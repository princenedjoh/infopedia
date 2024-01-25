import styled from "styled-components"

export const Difficulty = styled.div.attrs({
    className : ` Difficulty rounded-[5px] w-[150px] 
    h-[45px] p-[10px] flex flex-col justify-center cursor-pointer`
 })`
     background : ${({theme}) => `${theme.colors2.gray.gray7}`};
     &:hover{
        opacity : 0.6;
     }
 `