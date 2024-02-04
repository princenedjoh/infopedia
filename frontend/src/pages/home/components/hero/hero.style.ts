import styled from "styled-components";
import { images } from "../../../../assets";

export const Main = styled.div.attrs({
   className : ` Main w-full relative flex justify-center items-center h-[300px] overflow-hidden`
})`
   background : ${({theme}) => `${theme.colors2.shades.white}`};
`

export const CoverImage = styled.div.attrs({
   className : ` CoverImage  w-[400px] h-[400px]`
})`
   background-image: ${() => `url(${images.pattern1})`};
   background-size: cover;
`