import styled from "styled-components";

interface experienceTypes {
   themeColor? : string
   index? : number
}

export const Main = styled.div.attrs({
   className : ` Main w-full flex flex-col gap-[60px] items-center `
})``


export const Container = styled.div.attrs({
   className : ` Container flex items-center p-[20px] gap-[10px] rounded-[5px] w-[500px] cursor-default duration-300`
})<experienceTypes>`
   margin-left: ${({index}) => index && (index % 2) > 0 ? `-100px` : 0};
   border: ${({theme, themeColor}) => `1px solid ${themeColor ?? theme.colors2.main.primary}33`};
   &:hover{
      box-shadow: ${({theme, themeColor}) => `0px 0px 30px ${themeColor ?? theme.colors2.main.primary}33`};
      transform: ${({index}) => index && (index % 2) > 0 ? 'rotate(1deg)' : 'rotate(-1deg)'};
   }
`
