import { Modal } from "react-native";
import { Container } from "../Conteiner/Style";
import {
  ButtonSecondary,
  ButtonTitleIconMedical,
  ConteinerButton,
  ContentAccount,
  ModalConteiner,
  ModalContent,
  SubTitleText,
  SubTitleTextBox,
  SubTitleTextBox2,
  TextLink,
  Title,
  TopicsBox,
  TopicsConteiner,
} from "./Style";

export const ClinicAppointment = ({ visible, setClinicAppointment2, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">

      <ModalConteiner>

        <ModalContent>

        <Title>Agendar Consulta</Title>

        <SubTitleText>
          Consulte os dados selecionados para a sua consulta
        </SubTitleText>

        <TopicsConteiner>

          <TopicsBox>
            <SubTitleTextBox>Data da consulta</SubTitleTextBox>
            <SubTitleTextBox2>1 de Novembro de 2024</SubTitleTextBox2>
          </TopicsBox>

          <TopicsBox>
            <SubTitleTextBox>Médico(a) da consulta</SubTitleTextBox>
            <SubTitleTextBox2>Dra Alessandra</SubTitleTextBox2>
            <SubTitleTextBox2>Dermatologia, Esteticista</SubTitleTextBox2>
          </TopicsBox>

          <TopicsBox>
            <SubTitleTextBox>Local da consulta</SubTitleTextBox>
            <SubTitleTextBox2>São Paulo, SP</SubTitleTextBox2>
          </TopicsBox>

          <TopicsBox>
            <SubTitleTextBox>Tipo da consulta</SubTitleTextBox>
            <SubTitleTextBox2>Rotina</SubTitleTextBox2>
          </TopicsBox>

        </TopicsConteiner>

        <ConteinerButton>

          <ButtonSecondary onPress={() => setClinicAppointment2(false)}>
            <ButtonTitleIconMedical>CONFIRMAR</ButtonTitleIconMedical>
          </ButtonSecondary>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>

        </ConteinerButton>

        </ModalContent>

      </ModalConteiner>

    </Modal>
  );
};

