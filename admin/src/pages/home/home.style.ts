import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `Main w-full pt-[50px] flex justify-center gap-5`
})``

export const MainLeft = styled.div.attrs({
    className : `MainLeft w-[310px] justify-between h-screen`
})``

export const Ads = styled.div.attrs({
    className : `Ads w-[246px] h-[80vh] bg-green-500 rounded-[10px]
    flex justify-center items-center`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
    border : ${({theme}) => `0.5px solid ${theme.colors2.main.primary}1a`};
`