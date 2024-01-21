import styled from "styled-components";

export const Main = styled.div.attrs({
   className : ` Main flex flex-col gap-2 w-full rounded-[5px] duration-300`
})`
    background: ${({ theme }) => theme.colors2.gray.gray9};
`

export const Top = styled.div.attrs({
    className : ` Top w-full rounded-[5px] p-[10px] flex flex-wrap min-h[70px] duration-300`
})`
    background: ${({ theme }) => theme.colors2.shades.white};
`

export const Bottom = styled.div.attrs({
   className : ` Bottom w-full rounded-[5px]`
})`
    background: ${({ theme }) => theme.colors2.shades.white};
`

export const Tag = styled.div.attrs({
   className : ` Tag px-[20px] py-[5px] pt-[1px] rounded-full shadow cursor-pointer flex gap-2 text-[11px] h-[35px] items-center`
})`
    background: ${({ theme }) => theme.colors2.gray.gray7};
    color: ${({ theme }) => theme.colors2.red.red3};
    border: ${({ theme }) => `1px solid ${theme.colors2.gray.gray5}`};
    transform : scale(0.90);
    opacity : 0.8;

    &:hover {
        transform : scale(0.87);
        opacity : 0.7;
    }
`

export const Results = styled.div.attrs({
   className : ` Results flex flex-col p-[5px] max-h-[200px] overflow-auto rounded-[5px] z-1`
})`
    background: ${({ theme }) => theme.colors2.shades.white};
    border: ${({ theme }) => `1px solid ${theme.colors2.gray.gray7}`};
`

export const ResultItem = styled.div.attrs({
   className : ` ResultItem pl-[10px] pb-[5px] rounded-[5px] cursor-pointer`
})`
    &:hover {
        background: ${({ theme }) => theme.colors2.gray.gray7};
    }
`