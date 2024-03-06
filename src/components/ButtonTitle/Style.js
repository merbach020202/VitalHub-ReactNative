import styled, { css } from "styled-components";

export const ButtonTitle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 12px;
    color: #496BBA;
    `
    /* Estilização de texto diferenciada para colocar no buttonTitle */



////////////////HomePatient////////////////
export const ButtonTitleHomePatient = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 12px;

    ${(props) => props.clickButton ? css`
        color: #fbfbfb;
    `: css`
         color: #607ec5;
    `} 
    `

