import styled from "styled-components";
import { images } from "../../../../../../assets";

export interface heroCardTypes {
    background? : string
    position? : 'left' | 'right'
    hover? : boolean,
    backgroundImage? : string
}

export const Main = styled.div.attrs({
   className : ` Main w-[680px] flex justify-between mt-[-150px] duration-300`
})``

export const InnerContainer = styled.div.attrs({
    className : ` InnerContainer w-[170px] duration-300 
    flex flex-col justify-center overflow-hidden rounded-[5px] shadow-lg `
 })<heroCardTypes>`
     background : ${({theme}) => `${theme.colors2.shades.white}`};
     transform: ${({hover}) => hover ? 'rotateY(180deg)' : 'rotateY(0deg)'};
     box-shadow: ${({theme, background}) => `0px 0px 10px ${background ?? theme.colors2.main.primary}33`};
     border: ${({theme, background}) => `1px solid ${background ?? theme.colors2.main.primary}33`};
`
export const InnerWrapper = styled.div.attrs({
   className : ` InnerWrapper w-fit duration-0 p-[20px] flex justify-center`
})<heroCardTypes>`
    transform: ${({hover}) => hover ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
`

export const CoverImage = styled.div.attrs({
   className : ` CoverImage w-full h-[20px] rounded-[5px]`
})<heroCardTypes>`
    background-image : ${({backgroundImage})=> `url(${backgroundImage ?? images.img1})`};
    background-size : cover;
    opacity : 0.5
`