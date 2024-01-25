import styled from "styled-components";
import { ButtonStyleProps } from "./button";
import { TypographySize } from "../../../styles/style.types";

function getComplementaryColor(hexColor : string) {
  // Remove the # symbol if it exists
  hexColor = hexColor.replace(/^#/, '');

  // Convert the hex color to RGB
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the complementary color
  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;

  // Convert the complementary RGB values back to hex
  const complementaryHex = `#${complementaryR.toString(16)}${complementaryG.toString(16)}${complementaryB.toString(16)}`;

  return complementaryHex;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  width: ${({ size }) => (size?.width ? size?.width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ size }) => (size?.height ? size?.height : '6px')};
  color: ${({ theme, color, colorTheme }) => colorTheme ? colorTheme : color ? color : theme.colors.gray.gray1};
  font-size : ${({ textSize }) => ( textSize ? TypographySize?.[textSize] : TypographySize.sm)};
  border: ${({ border, theme, colorTheme}) => (border ? border : colorTheme && `1px solid ${colorTheme}`)};
  background: ${({ background, theme }) => background ? background : theme.colors.shades.white};
  padding: ${({ padding }) => (padding ? padding : '10px')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-align: center;
  border-radius: ${({ radius }) => (radius ? radius : 100)}px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${({ theme, shadow }) => shadow && `0 5px 26px rgb(129 129 129 / 15%)`};
  &:hover {
    opacity: 0.7;
    background: ${({ colorTheme }) => colorTheme ? colorTheme : null};
    color : ${({ colorTheme, theme }) => colorTheme ? getComplementaryColor(colorTheme) : theme.colors.shades.white};
  }
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`

export const Icon = styled.img`
`