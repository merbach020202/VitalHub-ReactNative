import styled from "styled-components";

//Import lib linear gradient
import {LinearGradient} from 'expo-linear-gradient'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`

/////////////////EmailCode///////////////////
export const ManyInputs = styled.SafeAreaView`
    width: 90%;
    
    justify-content: space-evenly;
    flex-direction: row;
`

////////////////Navigation////////////////
export const ConteinerNav = styled.View`
    height: 90%;
    justify-content: space-evenly;
`

////////////////Header////////////////
export const ContainerHeader = styled(LinearGradient).attrs({
    colors : ['#60BFC5', '#496BBA'],
    start: {x: -0.05, y: 1.08},
    end: {x: 1, y: 0}
})`
    width: 100%;
    height: 144px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
////////////////HomePatient////////////////
export const ButtonConteiner = styled.View`
    flex-direction: row;
`

export const PatientConteiner = styled.View`
    height: 300px;
`

////////////////ClinicSelection////////////////

export const ConteinerText = styled.View`
    width: 50%;
    height: 100px;

    align-items: flex-start;
    justify-content: space-evenly;

    padding-left: 20px;
`

export const ConteinerIcon = styled.View`
    width: 50%;
    height: 100px;

    align-items: flex-end;
    justify-content: space-around;

    padding-right: 20px;
`

export const WeekDaysConteiner = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    background-color: #E8FCFD;

    width: 100px;
    height: 26px;
`

export const StarConteiner = styled.View`
    flex-direction: row;
    
    width: 42px;
    height: 20px;
`