import styled from 'styled-components';

export const Top = styled.div.attrs({
   className : ` Top rotate-180`
})<{visibility? : boolean}>`
   opacity : ${({visibility}) => visibility ? 1 : 0};
`

export const Bottom = styled.div.attrs({
   className : ` Bottom mt-[-8px]`
})<{visibility? : boolean}>`
   opacity : ${({visibility}) => visibility ? 1 : 0};
`