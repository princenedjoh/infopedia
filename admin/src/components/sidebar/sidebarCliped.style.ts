import styled from 'styled-components'

export const Drawer = styled.div.attrs({
   className : ` Main fixed top-[65px] w-[270px] h-full overflow-y-scroll`
})`
    border-right : ${({theme}) => `2px solid ${theme.colors2.gray.gray7}`};
    // box-shadow: ${({theme}) => `0 0 3px ${theme.colors2.gray.gray4}` };
`

export const DropdownContainer = styled.div.attrs({
    className : ` DropdownContainer w-full duration-300 overflow-hidden`
 })<{
    active : boolean, 
    expand : boolean | undefined
 }>`
    max-height : ${({active, expand}) => expand ? '300px' : '0'};
    opacity : ${({active, expand}) => expand ? 1 : 0};
`

export const Container = styled.div.attrs({
   className : ` Container w-full p-[10px] cursor-pointer rounded-[5px] duration-300 `
})<{
    active : boolean,
    dropdown : boolean
}>`
    background : ${({theme, active, dropdown}) => {
        return (
            active 
                ? dropdown 
                    ? 'none' 
                    : `${theme.colors2.violet.violet5}60`
                : `none` 
        )
        }
    };
    &:hover{
        background : ${({theme, active, dropdown}) => {
            return (
                active 
                    ? dropdown 
                        ? 'none'
                        : `${theme.colors2.violet.violet5}60`
                    : `${theme.colors2.gray.gray7}90`
            )
        }};
    }
`

export const CustomBadge = styled.div.attrs({
   className : ` CustomBadge flex w-[20px] h-[20px] justify-center items-center rounded-full`
})`
    background : ${({theme}) => `${theme.colors2.main.primary}b3`};
`