import styled from "styled-components";

export const Main = styled.div.attrs({
   className : ` Main w-full flex flex-col items-center `
})``

export const Container = styled.div.attrs({
   className : ` Container w-full justify-between p-[40px] rounded-[5px]`
})`
    background : ${({theme}) => `${theme.colors2.main.primary}0d`};
`