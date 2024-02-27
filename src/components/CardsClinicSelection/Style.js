import styled from "styled-components";

export const TitleClinic = styled.Text`
    position: fixed;

    width: 100%;
    height: 140px;

    padding-top: 70px;
    padding-left: 95px;

    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;

    margin-top: 20px;
    margin-bottom: -5px;
`

export const ConteinerCard = styled.View`
    width: 100%;
    
    align-items: center;
    justify-content: center;
`

export const Card = styled.View`
    flex-direction: row;
    width: 90%;
    height: 100px;

    margin-top: 12px;

    border: 1px solid white;
    elevation: 2px;
`

export const ConteinerText = styled.View`
    width: 50%;
    height: 100px;

    align-items: flex-start;
    justify-content: space-evenly;

    padding-left: 20px;
`

export const BigSubTitle = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
`

export const SmallSubTitle = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
`
export const ConteinerIcon = styled.View`
    width: 50%;
    height: 100px;

    align-items: flex-end;
    justify-content: space-around;

    padding-right: 20px;
`

export const StarConteiner = styled.View`
    flex-direction: row;
    
    width: 42px;
    height: 20px;
`

export const StarText = styled(SmallSubTitle)`
    color: orange;
`

export const WeekDaysSubTitle = styled(SmallSubTitle)`
    color: #49B3BA;
`

export const WeekDaysConteiner = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    background-color: #E8FCFD;

    width: 100px;
    height: 26px;
`



