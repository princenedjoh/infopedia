import styled from "styled-components";

export const Main = styled.div.attrs({
   className : ` Main flex flex-col gap-[50px] items-center w-full mt-[70px]`
})``

export const TopContainer = styled.div.attrs({
   className : ` TopContainer w-full h-[260px] flex justify-center items-center`
})`
   background : ${({theme}) => `${theme.colors2.main.primary}0d`};
`