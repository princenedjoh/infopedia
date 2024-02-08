import styled from "styled-components";
import { images } from "../../../../assets";

export const Main = styled.div.attrs({
   className : ` Main w-full flex justify-center `
})``

export const ImageContainer = styled.div.attrs({
   className : ` ImageContainer w-[80px] h-[80px]`
})<{bgURL? : string}>`
   background-image : ${({bgURL}) => `url(${bgURL})`};
   background-size : cover;
`

export const Container = styled.div.attrs({
   className : ` Container rounded-[5px] cursor-default flex justify-center box-content items-center duration-300 h-[250px] w-[400px] shadow`
})<{background? : string}>`
   border: ${({theme, background}) => `1px solid ${background ?? theme.colors2.main.primary}0d`};
   &:hover{
      border: ${({theme, background}) => `1px solid ${background ?? theme.colors2.main.primary}33`};
      box-shadow: ${({theme, background}) => `0px 0px 40px ${background ?? theme.colors2.main.primary}1d`};
      transform: ${() => 'rotate(1deg)'};
   }
`