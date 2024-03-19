import styled from "styled-components";
import { TextButtonCard } from "../../components/Title/Style";

export const TitleMedicalRecord = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;

  margin-top: 24px;
  margin-bottom: 10px;
  margin-left: 20px;

  align-self: flex-start;
  width: 90%;
`;

export const SubTitleBoxMedicalRecords = styled.View`
  position: absolute;

  margin-top: 350px;

  align-items: center;
  justify-items: center;
  width: 70%;
`;

export const ConteinerInputsMedicalRecords = styled.View`
  width: 90%;

  background-color: #f5f3f3;
`;

export const TextBoxMedicalRecord = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InputMedicalRecord = styled.TextInput.attrs({
  placeholderTextColor: "#4E4B59",
})`
  width: 100%;
  height: 121px;

  border: 2px solid #f5f3f3;
  border-radius: 5px;

  padding: 15px;

  font-family: "MontserratAlternates_600SemiBold";
  color: #49b3ba;
  font-size: 14px;
`;

export const InputMedicalRecord2 = styled(InputMedicalRecord)`
  height: 53px;
  padding: 10px;
`;

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
  margin-top: 35px;
`;

export const ProfileNameMedicalRecords = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 20px;

  margin-bottom: -5px;
  margin-top: 20px;

  color: #33303e;
`;

export const SubTitleTextMedicalRecords = styled.Text`
  color: grey;
  text-align: center;
  font-family: "Quicksand_500Medium";
  font-size: 16px;
  line-height: 24px;

  padding: 20px;
`;

export const ButtonMedicalRecords = styled.TouchableOpacity`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;

  background-color: #496bba;
  color: #496bba;
  border-radius: 5px;

  margin-top: 30px;
`;

export const ButtonTitleMedicalRecords = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  font-size: 13px;
  color: white;
  text-transform: uppercase;
`;

/////////////////Outros//////////////////

export const ContainerImageExame = styled.View`
  width: 100%;
  height: 204px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
`;

export const InputRecordInsertionExame = styled(InputRecordInsertion2)`
  height: 120px;
`;

////////// Css  //////////

///// Conteiner /////
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const ContainerInputs = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 65px;
  margin-bottom: 30px;
`;

export const ContainerRecordInsertion = styled.ScrollView`
  width: 100%;
`;

///// Image /////

export const ImageRecordInsertion = styled.Image`
  width: 100%;
  height: 320px;
`;

///// Text /////

export const TextRecordInsertion = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_600SemiBold";
  align-self: flex-start;
  margin-top: 20px;
`;

export const TextRecordPaciente = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  text-align: center;
  color: gray;
  margin-top: 1px;
  margin-bottom: -60px;
`;

///// Title /////

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: #33303e;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const TitleRecordInsertion = styled(Title)`
  margin-top: 20px;
  text-align: center;
`;

///// Input /////

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 15px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  color: #34898f;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const InputRecordInsertion = styled(Input)`
  width: 100%;
  height: 130px;
  padding-bottom: 80px;
`;

export const InputRecordInsertion2 = styled(Input)`
  width: 100%;
`;

///// Link /////

export const LinkMedium = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_500Medium";
  color: #8c8a97;
  margin-top: 10px;
  margin-bottom: 15px;
  align-self: flex-start;
  margin-left: 20px;
  text-decoration: underline;
`;

export const LinkRecordInsertion = styled(LinkMedium)`
  align-self: center;
  margin-left: 0;
  margin-top: 30px;
  margin-bottom: 30px;
`;

///// Button /////

export const ButtonCard = styled.TouchableOpacity`
  margin-left: 60px;
  margin-top: 20px;
`;

export const TextBottonRecord = styled.Text`
  color: white;
  font-size: 16px;
  font-family: "MontserratAlternates_700Bold";
`;

export const TextButtonRecord = styled(TextButtonCard)`
  color: #c81d25;
  margin-right: 40px;
`;

export const ButtonMedicalRecord = styled.TouchableOpacity`
  flex-direction: row;
  gap: 10px;
  background-color: #49b3ba;
  width: 190px;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ViewButtonCamera = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

///// View /////

export const ViewLine = styled.View`
  border-bottom-width: 2;
  width: 100%;
  border-bottom-color: #8c8a97;
  margin-top: 20px;
`;
