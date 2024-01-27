import styled from "styled-components";

export const Main = styled.footer.attrs({
   className : ` Main w-full min-h-[70px] bottom-0 flex items-center justify-center text-[15px] mt-[50px]`
})<{rigid? : boolean}>
`
    color : ${({theme}) => theme.colors2.gray.gray3};
    background : ${({theme}) => `${theme.colors2.gray.gray9}`};
    position : ${({rigid}) => rigid? `absolute` : 'static'};
`

export const MainWrap = styled.div.attrs({
    className : ` MainWrap w-[1024px] h-full flex items-center justify-between gap-2`
 })``

export const Socials = styled.div.attrs({
   className : ` socials flex gap-3`
})`
`

export const Rights = styled.div.attrs({
   className : ` Rights `
})``

export const LogoIcon = styled.img.attrs({
   className : ` LogoIcon w-[75px]`
})``