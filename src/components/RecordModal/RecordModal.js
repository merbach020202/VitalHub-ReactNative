import { Modal } from "react-native";
import { ButtonSecondary } from "../Button/Style";
import { ButtonSecondaryTitleModal, ImageUserModal, ModalContent, ModalTitle, PatientModal, SubTitleTextModal, TextBox } from "./Style";
import { ContentAccount, TextLink } from "../Links/Style";

const RecordModal = ({ visible, setShowModalAppointment, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        {/* Content */}
        <ModalContent>
          <ImageUserModal
            source={require("../../assets/PerfilImg1.jpg")}
          />
          <ModalTitle>Nicolle Sarga</ModalTitle>

          <TextBox>
            <SubTitleTextModal>22 anos</SubTitleTextModal>
            <SubTitleTextModal>niccole.sarga@gmail.com</SubTitleTextModal>
          </TextBox>

          <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
            <ButtonSecondaryTitleModal>INSERIR PRONTUÁRIO</ButtonSecondaryTitleModal>
          </ButtonSecondary>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export default RecordModal;
