import styled from "styled-components";

export const TitleCalendar = styled.Text`
    font-size: 20px;

    margin-top: 50px;
    margin-bottom: 20px;
    
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const CalendarHeader = styled.View`
    width: 90%;

    align-items: center;

    height: 45%;

    border: 1px solid black;
`

export const ConteinerBottom = styled.View`
    width: 90%;
    height: 250px;

    margin-top: 25px;

    border: 1px solid red;
`

export const Label = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
`

export const InputCalendar = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;
    
    border: 2px solid #49b3ba;
    border-radius: 5px;
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
`