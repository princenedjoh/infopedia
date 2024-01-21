import styled from "styled-components";

export const Main = styled.div.attrs({
    className : ` Main fixed top-[50px] w-full h-full flex
    items-center flex-col pt-[70px] gap-5`
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
    background : ${({theme}) => theme.colors.background.light.white};
`

export const Container = styled.form.attrs({
   className : ` Container flex flex-col w-[300px]
   rounded-[10px] gap-2 items-center`
})`
`

export const Head = styled.div.attrs({
   className : ` Head flex flex-col w-[300px] items-center gap-3`
})``

export const Avatar = styled.img.attrs({
    className : ` Avatar w-[30px] rounded-full overflow-visible w-[100px]`
 })`
 `

 export const Title = styled.div.attrs({
    className : ` Title flex h-[20px] items-center font-semibold`
 })``
 
 export const HaveAnAccount = styled.div.attrs({
    className : ` HaveAnAccount w-[300px] h-[50px] flex
    hover:shadow rounded-[10px] text-xs justify-center items-center`
 })`
     background : ${({theme}) => theme.colors.background.light.white};
     border : ${({theme}) => `2px solid ${theme.colors.border.light.primary}`};
 `

 export const Link = styled.div.attrs({
    className : ` Link font-semibold cursor-pointer hover:opacity-[0.7]`
 })`
   color : ${({theme}) => theme.colors.main.primary};
 `

 export const Terms = styled.div.attrs({
    className : ` Terms cursor-pointer flex gap-3 w-[300px]
    w-[300px] justify-center text-xs`
 })`
    color : ${({theme}) => theme.colors.main.primary};
 `

 export const InputContainer = styled.div.attrs({
    className : ` InputContainer w-full h-[40px] rounded-[4px]
    flex items-center px-[15px] py-[5px] text-xs`
 })`
   background : ${({theme}) => theme.colors.background.light.primary};
 `

 export const Submit = styled.button.attrs({
   className : ` InputContainer w-full h-[40px] rounded-[4px]
   flex items-center px-[15px] py-[5px] text-xs justify-center
   items-center cursor-pointer font-bold hover:opacity-[0.9]
   hover:scale-[0.995] gap-1`
})`
  color : ${({theme}) => theme.colors.text.light.white};
  background : ${({theme}) => theme.colors.main.primary};
`

 export const InputFlex = styled.div.attrs({
   className : ` InputFlex flex justify-between w-full`
})``

export const InputValue = styled.input.attrs({
   className : ` InputValue outline-none w-full`
})`
   background : ${({theme}) => theme.colors.background.light.primary};
`

export const InputFlexLeft = styled.div.attrs({
   className : ` InputFlexLeft flex gap-2 h-full items-center w-full`
})``

export const InputFlexRight = styled.div.attrs({
   className : ` InputFlexRight `
})``

export const NameHere = styled.div.attrs({
   className : ` NameHere `
})``