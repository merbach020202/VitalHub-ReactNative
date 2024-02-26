import styled from "styled-components";
import { Button } from "../Button/Style";

export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 75%;
  padding: 30px 30px 10px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 20px;
  color: #33303e;

  margin-top: -100px;
  padding: 17px;
`;

export const ConteinerInputMedical = styled.View`
  flex-direction: row;

  width: 100%;
  align-content: space-around;
  justify-content: space-around;
`;

export const ConteinerMedicalBox = styled.View`
  width: 28%;

  align-items: center;
`;

export const ConteinerMedicalBox2 = styled(ConteinerMedicalBox)`
  width: 100%;

  align-items: center;
`;

export const InputIconMedical = styled.TextInput.attrs({
  placeholderTextColor: "#49b3ba",
})`
  height: 53px;
  padding: 18px;

  align-content: center;

  border: 2px solid #49b3ba;
  border-radius: 5px;

  font-family: "MontserratAlternates_700Bold";
  font-size: 12px;
  color: #49b3ba;
`;

export const InputIconMedical2 = styled(InputIconMedical)`
  width: 90%;
`;

export const TitleIconMedical = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;

  margin-top: 24px;
  margin-bottom: 10px;
  margin-left: -120px;

  color: black;
`;

export const ButtonSecondaryIconMedical = styled.TouchableOpacity`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 100px;

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

export const TitleIconMedical2 = styled(TitleIconMedical)`
  margin-top: 15px;
  margin-left: -65px;
`;

export const ContentAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;

    margin-top: 30px;
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