import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `Main text-xs w-full flex flex-col gap-3 mt-[100px]`
})`
    color : ${({theme}) => theme.colors.text.dark.black};
`

export const QuestionContainer = styled.div.attrs({
    className : `QeustionContainer  p-[13px] rounded-[10px] w-full flex flex-col hover:shadow`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
    &:hover{
        border : ${({theme}) => `1px solid ${theme.colors.border.light.primary}`};
    }
`

export const QuestionNumber = styled.div.attrs({
    className : `QuestionNumber rounded-full w-[90px] mb-[10px] flex items-center pb-[7px] pt-[6px] font-semibold justify-center`
})`
    background : ${({theme}) => theme.colors.background.light.white};
`

export const Question = styled.div.attrs({
    className : `Question duration-300 w-full mb-[10px] p-[15px] flex rounded-[7px] justify-between gap-5`
})<{showAnswer : boolean}>
`
    margin-bottom : ${({showAnswer}) => showAnswer? "10px" : "0"};
    background : ${({theme}) => theme.colors.background.light.white};
`

export const Left = styled.div.attrs({
    className : `Left w-full rounded-full h-full flex flex-col gap-3`
})``

export const MainQuestion = styled.div.attrs({
    className : `MainQuestion`
})``

export const PossibleAnswers = styled.div.attrs({
    className : `PossibleAnswers flex flex-col gap-2`
})``

export const PossibleAnswer = styled.div.attrs({
    className : `PossibleAnswer h-[15px] flex items-center`
})``

export const ShowAnswer = styled.div.attrs({
    className : `ShowAnswer hover:opacity-[0.85] hover:scale-[0.99] cursor-pointer p-[7px] text-[10px] px-[12px] pt-[6px] rounded-full w-fit`
})
`
    background : ${({theme}) => theme.colors.main.primary};
    color : ${({theme}) => theme.colors.text.light.white};
`

export const AnswerContainer = styled.div.attrs({
    className : `w-full rounded-b-[10px] p-[10px] duration-300`
})<{showAnswer : boolean}>
`
    transition-property : max-height;
    max-height : ${({showAnswer}) => showAnswer? "500px" : "0"};
    padding : ${({showAnswer}) => showAnswer? "10px" : "0"};
    background : ${({theme}) => theme.colors.background.light.white};
    color : ${({theme}) => theme.colors.text.dark.black};
`

export const Explanation = styled.div.attrs({
    className : ``
})
`
`

export const Right = styled.div.attrs({
    className : `Right flex flex-col items-end justify-between`
})`
    color : ${({theme}) => theme.colors.text.light.white};
`

export const Mark = styled.div.attrs({
    className : `Mark rounded-full h-[25px] w-[25px] font-bold cursor-pointer hover:opacity-[0.7] flex justify-center items-center`
})`
    background : ${({theme}) => theme.colors.main.primary};
`

export const ClearChoice = styled.div.attrs({
    className : `ClearChoice rounded-full p-[7px] w-[80px] flex justify-center font-semibold hover:opacity-[0.9] hover:scale-[0.99] cursor-pointer text-[10px]`
})`
    color : ${({theme}) => theme.colors.main.primary};
    background : ${({theme}) => theme.colors.background.light.primary};
`

export const ExplanationText = styled.div.attrs({
    className : `font-bold`
})`
    color : ${({theme}) => theme.colors.main.primary};
`

export const AnswerText = styled.span.attrs({
    className : `font-bold`
})`
    color : ${({theme}) => theme.colors.main.primary};
`

export const Answer = styled.div.attrs({
    className : `Answer`
})<{showAnswer : boolean}>
`
    margin-bottom : ${({showAnswer}) => showAnswer? "5px" : "0"};
`

export const Radio = styled.input.attrs({
    className : `mr-[5px]`
})``