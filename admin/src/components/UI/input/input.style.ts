import styled from "styled-components";
import { inputStyleProps } from "./input";

export const Main = styled.div.attrs({
    className : ` Main relative`
 })<inputStyleProps>
 `
     width: ${({ size }) => (size?.width ? size?.width : '100%')};
 `

export const MainWrap = styled.div.attrs({
   className : ` Main px-[20px] w-full h-full `
})<inputStyleProps>
`
    height: ${({ size }) => (size?.height ? size?.height : '47px')};
    padding : ${({ padding }) => (padding ? padding : '20px')};
    font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    max-width: ${({ maxWidth }) => maxWidth};
    color: ${({ theme, color, colorTheme }) => colorTheme ? colorTheme : color ? color : theme.colors.gray.gray3};
    border: ${({ border, theme, errorMessage }) => 
        (border ? border : `1px solid ${errorMessage? theme.colors.red.red3: theme.colors.gray.gray5}`)};
    background: ${({ background, theme }) => background ? background : theme.colors.shades.white};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    text-align: center;
    border-radius: ${({ radius }) => (radius ? radius : 10)}px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    filter: drop-shadow(${({ shadow }) => (shadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none')});
`

export const Input = styled.input.attrs({
   className : ` Input w-full outline-none px-[10px] py-[5px]`
})<inputStyleProps>`
    background: ${({ background, theme }) => background ? background : theme.colors.shades.white};
    color: ${({ theme, color, colorTheme }) => colorTheme ? colorTheme : color ? color : theme.colors.gray.gray1};
    font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    &::placeholder {
        font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    }
`

export const ErrorMessage = styled.div.attrs({
   className : ` ErrorMessage flex gap-1 h-[20px] items-center text-[13px] mt-[5px]`
})`
    color: ${({ theme }) => theme.colors.red.red3};
`