import { Modal } from "react-native";
import {
  ButtonSecondaryIconMedical,
  ButtonTitleIconMedical,
  ConteinerInputMedical,
  ConteinerMedicalBox,
  ConteinerMedicalBox2,
  ContentAccount,
  InputIconMedical,
  InputIconMedical2,
  ModalContent,
  PatientModal,
  TextLink,
  Title,
  TitleIconMedical,
  TitleIconMedical2,
} from "./Style";

const IconMedicalModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>

        <ModalContent>

          <Title>Agendar Consulta</Title>

          <TitleIconMedical>Qual o nível da consulta</TitleIconMedical>
          <ConteinerInputMedical>

            <ConteinerMedicalBox>
              <InputIconMedical>Rotina</InputIconMedical>
            </ConteinerMedicalBox>

            <ConteinerMedicalBox>
              <InputIconMedical>Exame</InputIconMedical>
            </ConteinerMedicalBox>

            <ConteinerMedicalBox>
              <InputIconMedical>Urgência</InputIconMedical>
            </ConteinerMedicalBox>

          </ConteinerInputMedical>
          
          <TitleIconMedical2>Informe a cidade desejada</TitleIconMedical2>
          <ConteinerInputMedical>

            <ConteinerMedicalBox2>
              <InputIconMedical2 placeholder={"Informe a cidade"}/>
            </ConteinerMedicalBox2>

          </ConteinerInputMedical>

          <ButtonSecondaryIconMedical onPress={() => setShowModalCancel(false)}>
            <ButtonTitleIconMedical>CONFIRMAR</ButtonTitleIconMedical>
          </ButtonSecondaryIconMedical>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>

        </ModalContent>

      </PatientModal>
    </Modal>
  );
};

export default IconMedicalModal;
