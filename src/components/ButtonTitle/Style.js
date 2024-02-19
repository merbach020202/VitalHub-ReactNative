import styled from "styled-components";

export const ButtonTitle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 12px;
    color: white;
    
    `
    /* Estilização de texto diferenciada para colocar no buttonTitle */

/* ${props => props.clickButton ? css`
        color: #fbfbfb;
    `: css`
         color: #f3f3f3;
    `} */

////////////////HomePatient////////////////
export const ButtonTitleHomePatient = styled(ButtonTitle)`
    color: #607EC5;
    font-size: 12px;
`
