import { AppTypography, Flex } from "../../../styles/global";
import theme from "../../../styles/theme";
import * as buttonStyle from './cButton.style'
import { TypographySize, TypographyBold } from "../../../styles/style.types";
import { IconType } from "react-icons/lib";
import { CircularProgress } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { ElementType, useState } from "react";
import './antd.css'

type ButtonTypes = 'submit' | 'button'

export type ButtonStyleProps = {
  color?: string
  background?: string
  colorTheme? : string
  border?: string
  PreIcon?: ElementType
  PostIcon?: ElementType
  id?: string
  radius?: number
  padding?:string
  maxWidth?:string
  size?: {
    width?: string
    height?: string
  }
  shadow?: boolean
  textSize?: 'xs' | 'sm' | 'md' | 'lg'
  textBold?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  showLoader? : boolean
  variant? : "text" | "outlined" | "contained"
  disableElevation? : boolean
}

interface ButtonProps extends ButtonStyleProps {
  text: string
  Loader? : (props : any)=>JSX.Element
  type: ButtonTypes
  onClick?: () => void
}

const Button = ({
  id,
  text,
  color,
  colorTheme,
  background,
  border,
  type,
  PreIcon,
  PostIcon,
  onClick,
  radius,
  maxWidth,
  size,
  textSize,
  textBold,
  padding,
  shadow,
  Loader,
  disabled,
  showLoader,
  variant,
  disableElevation
}: ButtonProps) => {

  return (
    <buttonStyle.ButtonStyle
      shadow={shadow}
      disabled={disabled}
      size={size}
    >
      <LoadingButton
        style={{
          background, 
          color,
          padding,
          border,
          borderRadius : `${radius}px`,
          maxWidth,
          width : size?.width,
          height : size?.height

        }}
        size="small"
        color="inherit"
        onClick={onClick}
        disabled={disabled}
        disableElevation={disableElevation ?? true}
        startIcon={
          PreIcon && !disabled 
            ? <PreIcon 
                color={
                  color 
                    ? color 
                    : theme.colors2.main.primary
                }
              /> 
            : <></>
        }
        variant={variant ?? 'contained'}
      >
        {
          disabled && showLoader ?
          <CircularProgress style={{color : theme.colors2.shades.white}} size={"20px"} color={"inherit"} /> :
          <AppTypography 
            size={textSize ? TypographySize?.[textSize] : TypographySize.sm} 
            bold={textBold ? TypographyBold?.[textBold] : TypographyBold.md} 
            textColor={color? color : theme.colors2.main.primary}
            colorTheme={colorTheme && "inherit"}>
            {text.toLowerCase()}
          </AppTypography>
        }
        {
          PostIcon
            && !showLoader 
            && <Flex 
                margin='-3px 0 0 0'
                width='fit-content'>
                <PostIcon
                    color={
                      color 
                        ? color 
                        : theme.colors2.main.primary
                    }
                  />
            </Flex>
        }
      </LoadingButton>
    </buttonStyle.ButtonStyle>
  )
}

type customPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface pimaryButtonProps extends customPartial<ButtonProps, 'type' | 'text'> {
  rounded? : boolean
}
export const PrimaryButton = ({
  text, type, disabled, showLoader, size, radius, rounded, color, background, shadow, PreIcon, PostIcon,
  textSize, onClick
} : pimaryButtonProps) => {
  return  <Button 
  onClick={onClick}
  shadow={shadow} 
  PreIcon={PreIcon}
  PostIcon={PostIcon}
  disabled={disabled} 
  Loader={CircularProgress} 
  showLoader={showLoader}
  type={type ?? 'button'} 
  text={text ?? 'Submit'} 
  size={{width : size?.width ?? "280px", height : size?.height ?? "47px"}}
  radius={radius ?? rounded ? 1000 : 5}
  background={background ?? theme.colors2.main.primary}
  color={color ?? theme.colors2.shades.white}
  textSize={textSize ?? "sm"}/>
}
export default Button