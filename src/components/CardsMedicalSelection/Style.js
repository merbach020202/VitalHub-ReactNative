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

export const ConteinerImage = styled.View`
    width: 30%;
    height: 100px;
    
    align-items: center;
    justify-content: center;
`

export const DoctorImage = styled.Image`
    width: 77px;
    height: 80px;

    border-radius: 5px;
`

export const Card = styled.View`
    flex-direction: row;
    width: 90%;
    height: 100px;

    margin-top: 12px;

    border-radius: 3px;
    elevation: 1px;
`

export const ConteinerText = styled.View`
    width: 70%;
    height: 100px;

    align-items: flex-start;
    justify-content: space-evenly;

    padding: 10px;
`

export const BigSubTitle = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
`

export const SmallSubTitle = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #8C8A97;
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

export const ButtonSecondaryIconMedical = styled.TouchableOpacity`
  width: 100%;
  height: 53px;

  justify-content: center;
  align-items: center;

  background-color: #496bba;
  color: #496bba;
  border-radius: 5px;
`;

export const ButtonTitleIconMedical = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  color: #607ec5;
  font-size: 12px;
  color: white;
`;

export const ContentAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
`

export const TextLink = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';

    margin-top: 10px;
    margin-bottom: 15px;
    
    align-self: flex-start;
    margin-left: 20px;
    text-decoration: underline;
    color: #344F8F;
`

export const ConteinerButton = styled.View`
    height: 150px;
    width: 90%;

    margin-top: 30px;
    align-items: center;
    justify-content: space-around;

    position: static;
`

