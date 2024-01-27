import styled from "styled-components";
import { images } from "../../../../assets";

export const Main = styled.div.attrs({
   className : ` Main w-full flex justify-center `
})``

export const CoverImage = styled.div.attrs({
   className : ` CoverImage  `
})`
   background : ${() => `url(${images.img1})`};
   background-color : ${({theme}) => theme.colors2.gray.gray3};
`