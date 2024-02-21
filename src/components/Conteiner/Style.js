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

    margin-bottom: 20px;
`

// export const CardConteiner = styled.View`
//     width: 90%;
//     height: 110px;

//     flex-direction: row;

//     justify-content: center;
//     align-items: center;

//     elevation: 2px;
// `

// export const TextConteiner = styled.View`
//     width: 150px;
//     height: 80px;

//     align-items: center;
    
//     margin-left: -20px;    
// `

// export const ClockConteiner = styled.View`
//     width: 50px;
// `


//////////// Daqui pra cima é o que eu tinha feito antes

