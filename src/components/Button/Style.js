import styled, { css } from "styled-components";
import { ButtonTitle } from "../ButtonTitle/Style";

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
export const ButtonHomePatient = styled.TouchableOpacity`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;

    background-color: white;
    border: 2px solid #607EC5;
    border-radius: 5px;

    width: 28%;

    margin-left: 10px;

    ${(props) => props.clickButton ? css`
    background-color: #496bba;
    `: css`
        background-color: transparent;
        border: 2px solid #607EC5;
    `} 
`

export const ButtonHomePatientUnico2 = styled(Button)`
    width: 28%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;
    
    background-color: #496BBA;
    color: #496BBA;
    border-radius: 5px;

    ${(props) => props.clickButton ? css`
    `: css`
        background-color: transparent;
        border: 2px solid #607EC5;
    `} 
`

////////////////CancelationModal////////////////
export const ButtonSecondary = styled(Button)`
    
`

export const ButtonSecondarTitle = styled(ButtonTitle)`
    text-transform: capitalize;
    color: white;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
`

