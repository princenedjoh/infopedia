import styled from "styled-components";
import { AppTypographyProps, TypographyBold, clickableProps } from "./style.types"
import { flexProps } from "./style.types";
import { hrProps } from "./style.types";

export const AppTypography = styled.span<AppTypographyProps>`
  display: ${({ display, ellipsis }) => display ? display : ellipsis && '-webkit-box'};
  -webkit-line-clamp: ${({ maxLines, ellipsis }) => ellipsis && maxLines && maxLines};
  -webkit-box-orient: ${({ ellipsis }) => ellipsis && 'vertical'};
  overflow: ${({ ellipsis }) => ellipsis && 'hidden'};
  text-overflow: ${({ ellipsis }) => ellipsis && 'ellipsis'};
  font-size: ${({ size, theme }) => size ?? theme.typography.size.sm};
  font-weight: ${({ bold, theme }) => bold ?? theme.typography.bold.sm};
  color: ${({ theme, textColor, colorTheme }) => colorTheme ? colorTheme : textColor ? textColor : theme.colors2.gray.gray1};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-align : ${({ textAlign }) => (textAlign ? textAlign : "left")};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : undefined)};
  line-height: ${({ lineHeight }) => (lineHeight && lineHeight)};
  width : fit-content;
  outline: none;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;

  &:hover {
    scale : ${({ clickable }) => (clickable && '0.99')};
    opacity: ${({ clickable }) => (clickable ? 0.7 : undefined)};
    text-decoration : ${({ clickableLink }) => clickableLink ? 'underline' : 'none'};
    color: ${({ theme, colorTheme }) => colorTheme ? "inherit" : null};
    color: ${({ theme, clickableLink }) => clickableLink ? theme.colors.blue.blue4 : null};
  }
`;

export const Flex = styled.div.attrs({
   className : ` Flex duration-300`
})<flexProps>
`
  display : flex;
  flex-direction : ${({ direction }) => direction ? direction : "row"};
  gap : ${({ gap }) => gap ? `${gap}px` : "8px"};
  padding : ${({ padding }) => padding ? padding : "0"};
  opacity : ${({ opacity }) => opacity ? opacity : 1};
  margin : ${({ margin }) => margin ? margin : "0"};
  flex-wrap : ${({ flexWrap }) => flexWrap ? 'wrap' : "no-wrap"};
  justify-content : ${({ justify }) => justify ? justify : "flex-start"};
  align-items : ${({ align }) => align ? align : "flex-start"};
  width : ${({ width }) => width ? width : "100%"};
  max-width : ${({ maxWidth }) => maxWidth};
  max-height : ${({ maxHeight }) => maxHeight};
  height : ${({ height }) => height ? height : undefined};
  color: ${({ theme, textColor, colorTheme }) => colorTheme ? colorTheme : textColor ? textColor : theme.colors2.gray.gray1};
  border-radius : ${({ rounded }) => rounded ? rounded : 0};
  background: ${({ background }) => background && background };
  cursor: ${({ cursor }) => cursor && cursor };
  shadow : ${({ shadow }) => shadow && shadow };
  z-index : ${({ z }) => z && z };
  position : ${({ position }) => position && position };
`

export const Hr = styled.div.attrs({
  className : ` hr rounded-full`
})<hrProps>`
  width : ${({ size }) => size?.width? size.width : '100%'};
  height : ${({ size }) => size?.height? size.height : '1px'};
  background: ${({ background, theme }) => background ? background : `${theme.colors2.gray.gray7}`};
  margin : ${({ margin }) => margin ? margin : '0'};
  padding : ${({ padding }) => padding ? padding : '0'};
`

export const Clickable = styled.div.attrs({
   className : ` Clickable flex `
})<clickableProps>`
  &:hover{
    cursor : ${({ cursor }) => cursor ? cursor : 'pointer'};
    opacity : 0.8;
    transform : scale(0.99)
  }
`

export const ClickableTab = styled.div.attrs({
  className : ` Clickable flex  `
})<clickableProps>`
  cursor : ${({ cursor }) => cursor ? cursor : 'pointer'};
  border-radius : ${({ radius }) => radius ?? '100px'};
  margin : ${({ margin }) => margin ?? 0};
  padding : ${({ padding }) => padding ?? "3px 10px"};
  &:hover{
    background: ${({ theme }) => `${theme.colors2.gray.gray5}80`};
    opacity : 0.8;
 }
`