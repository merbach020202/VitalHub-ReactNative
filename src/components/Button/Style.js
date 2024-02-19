import styled, { css } from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;
    
    background-color: #496BBA;
    color: #496BBA;
    border-radius: 5px;

    
`

/* Estilização diferenciada para colocar no Button */

    /* ${props => props.clickButton ? css`
    `: css`
        background-color: transparent;
        border: 2px solid #607EC5;
    `} */

    
export const ButtonTitleGoogle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;

    color: #496BBA;
    text-transform: uppercase;
`


export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;

    flex-direction: row;
    gap: 10px;
`

export const ButtonContinue = styled(Button)`
    margin-top: 30px;
`

////////////////NewPassword////////////////

export const PasswordButton = styled(Button)`
    margin-top: 30px;
`

////////////////Profile////////////////
export const ButtonProfile = styled(Button)`
    margin-bottom: 20px;
    margin-top: -30px;
`

////////////////HomePatient////////////////
export const ButtonHomePatient = styled(Button)`
    background-color: white;
    border: 2px solid #607EC5;

    width: 28%;

    margin-left: 10px;
`

export const ButtonHomePatientUnico = styled(Button)`
    width: 28%;
`