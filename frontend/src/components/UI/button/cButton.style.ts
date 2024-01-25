import styled from "styled-components";
import { ButtonStyleProps } from "./button";

export const ButtonStyle = styled.button<ButtonStyleProps>`
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: ${({ theme, shadow }) => shadow && `0 5px 26px rgb(129 129 129 / 15%)`};
  height: ${({ size }) => (size?.height ?? 'fit-content')};
  width: ${({ size }) => (size?.width ?? 'fit-content')};
  &:hover {
    opacity: 0.7;
    background: ${({ colorTheme }) => colorTheme ? colorTheme : null};
  }
`