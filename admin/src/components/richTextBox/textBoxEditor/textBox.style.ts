import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `Main w-full flex flex-col gap-5 py-[15px] 
    px-[15px] rounded-[10px]`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
    border : ${({theme}) => `0.5px solid ${theme.colors2.main.primary}1a`};
`

export const QuestionTop = styled.div.attrs({
    className : `QuestionTop flex flex-col gap-2`
})``

export const Title = styled.div.attrs({
    className : `Title rounded-full w-[80px] flex items-center 
    font-semibold`
})`
`

export const Question = styled.div.attrs({
    className : `Question p-[0px] rounded-[5px] min-h-[200px]`
})`
     background : ${({theme}) => theme.colors.background.light.white};
`

export const PossibleAnswers = styled.div.attrs({
    className : `PossibleAnswers flex flex-col gap-2 duration-300`
})``

export const AnswerTiltle = styled.div.attrs({
    className : `AnswerTiltle rounded-full text-[11px] w-[70px] flex 
    items-center font-semibold`
})`
`

export const Answers = styled.div.attrs({
    className : `Answers duration-300 flex flex-col gap-2 p-[10px] rounded-[5px]`
})`
    background : ${({theme}) => theme.colors.background.light.white};
`

export const AnswerSpan = styled.div.attrs({
    className : `AnswerSpan duration-300 flex gap-2 min-h-[40px] 
    items-center`
})``

export const CancelButton = styled.div.attrs({
    className : `CancelButton duration-300 font-bold pb-[2px]
    rounded-[3px] h-[25px] w-[25px] flex justify-center items-center
    cursor-pointer`
})`
    color : ${({theme}) => theme.colors.buttons.red};
    border : ${({theme}) => `1px solid ${theme.colors.buttons.red}`};
    background : ${({theme}) => theme.colors.background.light.white};
    &:hover{
        border : ${({theme}) => `1px solid ${theme.colors.main.primary}`};
        background : ${({theme}) => theme.colors.buttons.red};
        color : ${({theme}) => theme.colors.text.light.white};
    }
`

export const AddAnswer = styled.div.attrs({
    className : `CancelButton duration-300 font-bold pb-[2px]
    rounded-[3px] h-[25px] w-[25px] flex justify-center items-center
    cursor-pointer`
})`
    border : ${({theme}) => `1px solid ${theme.colors.main.primary}`};
    background : ${({theme}) => theme.colors.background.light.white};
    color : ${({theme}) => theme.colors.buttons.green};
    &:hover{
        color : ${({theme}) => theme.colors.background.light.white};
        border : ${({theme}) => `1px solid ${theme.colors.background.light.white}`};
        background : ${({theme}) => theme.colors.buttons.green};
    }
`

export const Radio = styled.input.attrs({
    className : `Radio `
})``

export const Answer = styled.div.attrs({
    className : `Answer duration-300 rounded-[5px] w-full min-w-[0px]`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
`

export const SaveQuestion = styled.div.attrs({
    className : `SaveQuestion rounded-[5px] w-[130px] flex items-center pb-[7px] pt-[6px] 
    font-semibold justify-center cursor-pointer`
})`
    color : ${({theme}) => theme.colors.main.primary};
    border : ${({theme}) => `1px solid ${theme.colors.main.primary}`};
    background : ${({theme}) => theme.colors.background.light.primary};
    &:hover{
        background : ${({theme}) => theme.colors.main.primary};
        color : ${({theme}) => theme.colors.background.light.white};
    }
`
 export const ProgramContainer = styled.div.attrs({
    className : ` ProgramContainer w-full p-[10px] flex gap-2 rounded-[5px]
    min-h-[50px] items-center flex-wrap duration-300`
 })`
    background : ${({theme}) => theme.colors.background.light.white};
 `

 export const ProgramHeads = styled.div.attrs({
    className : ` ProgramHeads rounded-full px-[10px] font-semibold text-[9px]
    shadow cursor-pointer hover:scale-[0.95] flex h-[30px] flex justify-center
    items-center pb-[3px] gap-1 duration-300`
 })`
    border : ${({theme}) => `1px solid ${theme.colors.border.dark.tetiary}`};
    color : ${({theme}) => theme.colors.background.dark.secondary};
    background : ${({theme}) => theme.colors.background.light.white};
 `

 export const ProgamsTitle = styled.div.attrs({
    className : ` ProgamsTitle font-semibold `
 })``

 export const ProgramInput = styled.input.attrs({
    className : ` ProgramInput p-[10px] w-[80%] outline-none duration-300`
 })``

 export const SearchContainer = styled.div.attrs({
    className : `SearchContainer rounded-[10px] relative top-[0]
    backdrop-filter backdrop-blur-xl p-[12px] overflow-y-auto
    w-full max-h-[200px] text-xs duration-300`
})`
    box-shadow: ${({theme}) => `0px 0px 15px -3px ${theme.colors.background.dark.secondary}1a`};
    border : ${({theme}) => `1px solid ${theme.colors.border.light.primary}`};
    color : ${({theme}) => theme.colors.text.dark.primary};
    background : ${({theme}) => `${theme.colors.background.light.white}b3`};
`

export const SearchItem = styled.div.attrs({
   className : ` SearchItem cursor-pointer p-[10px] rounded-[5px] hover:font-semibold
   duration-300`
})`
    &:hover{
        background : ${({theme}) => `${theme.colors.background.light.primary}`};
    }
`

export const NoResults = styled.div.attrs({
   className : ` NoResults w-full text-semibold flex flex-col items-center duration-300`
})``

export const ResultTitle = styled.div.attrs({
   className : ` ResultTitle text-sm font-semibold p-[10px] rounded-[5px] mb-[10px]
   coursor-default`
})`
    background : ${({theme}) => `${theme.colors.background.light.primary}80`};
`