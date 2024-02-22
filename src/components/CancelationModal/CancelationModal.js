import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecondarTitle, ButtonSecondary } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";
import { ContentAccount, TextLink } from "../Links/Style";

const CancelationModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        {/* Content */}
        <ModalContent>
          <Title>Cancelar Consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <ButtonSecondarTitle>CONFIRMAR</ButtonSecondarTitle>
          </ButtonSecondary>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export default CancelationModal;
