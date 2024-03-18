import styled from "styled-components";

export const TitleMedicalRecord = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;

  margin-top: 24px;
  margin-bottom: 10px;
`;

export const SubTitleBoxMedicalRecords = styled.View`
  position: absolute;

  margin-top: 320px;

  align-items: center;
  justify-items: center;
  width: 70%;
`;

export const ConteinerInputsMedicalRecords = styled.View`
  width: 90%;

  align-items: flex-start;
`;

export const TextBoxMedicalRecord = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InputMedicalRecord = styled.TextInput.attrs({
  placeholderTextColor: '#49b3ba'
})`
  width: 100%;
  height: 121px;

  border: 2px solid #49b3ba;
  border-radius: 5px;

  padding: 15px;
  padding-bottom: 80px;

  font-family: "MontserratAlternates_600SemiBold";
  color: #49b3ba;
  font-size: 14px;
`;

export const InputMedicalRecord2 = styled(InputMedicalRecord)`
  height: 53px;
  padding: 10px;
`

export const TitleBoxMedicalRecord = styled.Text`
  font-family: "Quicksand_600SemiBold";
  font-size: 16px;

  padding: 10px;
  margin-top: 14px;
`;

export const LogoPerfilMedicalRecords = styled.Image`
    width: 100%;
    height: 320px;

    margin-bottom: 80px;
`

export const ProfileNameMedicalRecords = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    
    margin-bottom: -5px;
    margin-top: 20px;
    
    color: #33303E;
`

export const SubTitleTextMedicalRecords = styled.Text`
    color: grey;
    text-align: center;
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    line-height: 24px;

    padding: 20px;
`

export const ButtonMedicalRecords = styled.TouchableOpacity`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;
    
    background-color: #496BBA;
    color: #496BBA;
    border-radius: 5px;

    margin-top: 30px;
`

export const ButtonTitleMedicalRecords = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 13px;
    color: white;
    text-transform: uppercase;
    `