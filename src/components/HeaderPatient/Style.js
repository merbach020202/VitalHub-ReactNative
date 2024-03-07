import styled from "styled-components";

export const BoxUser = styled.TouchableOpacity.attrs({
    activeOpacity : 1
})`
    flex-direction: row;
    margin-top: 55px;
    margin-left: 20px;

    width: 300px;
`

export const ImageUser = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;
`
export const DataUser = styled.View`
    margin-left: 10px;
    justify-content: space-around;
`

export const TextDefault = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
    color: #4E4B59;
`

export const NameUser = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #FBFBFB;
`

///////////HomePatient///////////
export const ImageUserHomePatient = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 5px;

    margin-left: -120px;
`

export const ConteinerIcon = styled.TouchableOpacity`
    /* flex-direction: row;
    margin-top: 30px;
    margin-right: 20px; */
    
    align-items: flex-end;
    margin-left: 350px; 
    margin-top: -40px;

    width: 30px;
`