import styled from "styled-components";
import { images } from "../../../../assets";

export const Main = styled.div.attrs({
   className : ` Main w-full flex flex-col items-center py-[50px]`
})`
   background : ${({theme}) => `${theme.colors2.gray.gray9}`};
`

export const Container = styled.div.attrs({
   className : ` Container w-full justify-center`
})``

export const imageContainer = styled.div.attrs({
   className : ` imageContainer `
})``