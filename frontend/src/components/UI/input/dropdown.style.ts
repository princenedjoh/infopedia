import styled from "styled-components";
import { inputStyleProps } from "./dropdown";

export const Main = styled.div.attrs({
   className : ` Main relative`
})<inputStyleProps>
`
    width: ${({ size }) => (size?.width ? size?.width : '100%')};
`

export const MainWrap = styled.div.attrs({
   className : ` Main px-[20px] w-full min-h-[47px]`
})<inputStyleProps>
`
    font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    max-width: ${({ maxWidth }) => maxWidth};
    color: ${({ theme, color, colorTheme }) => colorTheme ? colorTheme : color ? color : theme.colors.gray.gray3};
    border: ${({ border, theme, errorMessage }) => 
        (border ? border : `1px solid ${errorMessage? theme.colors.red.red3: theme.colors.gray.gray5}`)};
    background: ${({ background, theme }) => background ? `${background}` : `${theme.colors.shades.white}`};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    text-align: center;
    border-radius: ${({ radius }) => (radius ? radius : 5)}px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    filter: drop-shadow(${({ shadow }) => (shadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none')});
`

export const Input = styled.input.attrs({
   className : ` Input w-full outline-none px-[5px] py-[5px]`
})<{background? : string}>`
    background: ${({ background, theme }) => background ? background : theme.colors.shades.white};
    font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    &::placeholder {
        font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
    }
`

export const ErrorMessage = styled.div.attrs({
   className : ` ErrorMessage flex gap-1 items-center text-[13px] mt-[5px]`
})`
    color: ${({ theme }) => theme.colors.red.red3};
`

export const Menu = styled.div.attrs({
   className : ` Menu mt-[10px] absolute p-[10px] max-h-[120px] overflow-auto flex flex-col gap-0 z-10 shadow-lg 
   backdrop-filter backdrop-blur-lg`
})<inputStyleProps>
`
    visibility : ${({show}) => show? "visible" : "hidden"};
    border: ${({ border, theme}) => (border ? border : `1px solid ${theme.colors.gray.gray5}`)};
    border-radius: ${({ radius }) => (radius ? radius : 10)}px;
    background: ${({ background, theme }) =>  `${theme.colors.shades.white}80`};
    width: ${({ size }) => (size?.width ? size?.width : '100%')};
`

export const Content = styled.div.attrs({
   className : ` Content flex gap-2 p-[10px] rounded-[5px] cursor-pointer `
})`
    &:hover {
        background: ${({ theme }) => `${theme.colors2.gray.gray7}`};
    }
`