import styled from "styled-components";
import { Title } from "../Title/Style";

export const ContainerCardList = styled.View`
    width: 90%;
    flex-direction: row;
    gap: 10px;
`

export const ProfileImage = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`

export const ContentCard = styled.View`
    width: 70%;

    elevation: 4px;
`

export const DataProfileCard = styled.View`
    gap: 6px;
`

export const ProfileName = styled(Title)`
    font-size: 16px;
`

export const ProfileData = styled.View`
    flex-direction: row;
    gap: 15px;
`

export const TextAge = styled.Text`
    font-size: 14px;
    color: #8C8A97;
    font-family: "Quicksand_400Regular";
`

export const TextBold = styled(TextAge)`
    font-family: "Quicksand_600SemiBold";
`
export const ViewRow = styled.View`
    width: 100%;
    margin-bottom: 12px;
    padding: 10px 10px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ClockCard = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    gap: 6px;
    border-radius: 5px;
    background-color: ${(props) => props.situacao == "pendente" ? "E8FCFD" : "#f1f0f5"};
`
export const ButtonCard = styled.TouchableOpacity`

`

export const ButtonText = styled.Text`
    color: ${(props) => props.situacao == "pendente" ? "C81D25" : "#344f8f"};
    font-family: 'MontserratAlternates_500Medium';
    font-size: 12px;
`