import styled from "styled-components";

export const ContainerFooter = styled.View`
    width: 100%;
    height: 73px;

    position: absolute;
    justify-content: center;

    margin-top: 664px;
    background-color: white;
`

export const IconFooter = styled.View`
    flex-direction: row;

    justify-content: space-around;
`
export const BoxIconFilter = styled.TouchableOpacity`
    width: 92px;
    height: 33px;
    
    background-color: #ECF2FF;
    border-radius: 19.5px;

    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
`

export const BoxIcon = styled(BoxIconFilter)`
    background-color: none;
`

export const TextFooter = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 12px;
    color: #607EC5;
`