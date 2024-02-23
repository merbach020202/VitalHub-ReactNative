import { ScrollView } from "react-native";
import { Container } from "../../components/Conteiner/Style";
import { ButtonMedicalRecords, ButtonTitleMedicalRecords, ConteinerInputsMedicalRecords, InputMedicalRecord, InputMedicalRecord2, LogoPerfilMedicalRecords, ProfileNameMedicalRecords, SubTitleBoxMedicalRecords, SubTitleTextMedicalRecords, TextBoxMedicalRecord, TitleMedicalRecord } from "./Style";


export const MedicalRecords = () => {
  return (
    <ScrollView>
      <Container>

        <LogoPerfilMedicalRecords source={require("../../assets/ImgLogoPerfil.jpg")} />

        <SubTitleBoxMedicalRecords>
          <ProfileNameMedicalRecords>Richard Kosta</ProfileNameMedicalRecords>

          <TextBoxMedicalRecord>
            <SubTitleTextMedicalRecords>22 anos</SubTitleTextMedicalRecords>
            <SubTitleTextMedicalRecords>richard.kosta@gmail.com</SubTitleTextMedicalRecords>
          </TextBoxMedicalRecord>
        </SubTitleBoxMedicalRecords>

        <ConteinerInputsMedicalRecords>
          <TitleMedicalRecord>Descrição da consulta</TitleMedicalRecord>
          <InputMedicalRecord placeholder={"Descrição"} />
        </ConteinerInputsMedicalRecords>

        <ConteinerInputsMedicalRecords>
          <TitleMedicalRecord>Diagnóstico do paciente</TitleMedicalRecord>
          <InputMedicalRecord2 placeholder={"Diagnóstico do paciente"} />
        </ConteinerInputsMedicalRecords>

        <ConteinerInputsMedicalRecords>
          <TitleMedicalRecord>Prescrição médica</TitleMedicalRecord>
          <InputMedicalRecord placeholder={"Prescrição médica"} />
        </ConteinerInputsMedicalRecords>

        <ButtonMedicalRecords>
          <ButtonTitleMedicalRecords>Salvar</ButtonTitleMedicalRecords>
        </ButtonMedicalRecords>

      </Container>
    </ScrollView>
  );
};
