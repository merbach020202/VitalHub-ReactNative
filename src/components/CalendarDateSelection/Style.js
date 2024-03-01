import styled from 'styled-components/native';

export const DayContainer = styled.View`
    background-color: ${props => props.isSelected ? '#60BFC5' : 'transparent'};
    width: 32px;
    height: 32px;
    justify-content: center;
    `

export const DayText = styled.Text`
color: ${props => props.isSelected ? '#FBFBFB' : props.isDisabled ? '#ACABB7' : '#5F5C6B'};
font-size: 16px;
`;