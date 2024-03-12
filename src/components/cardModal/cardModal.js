import { Modal } from "react-native";
import { ButtonSecondary } from "../Button/Style";
import { ButtonSecondaryTitleModal, ImageUserModal, ModalContent, ModalTitle, PatientModal, SubTitleTextModal, TextBox } from "./Style";
import { ContentAccount, TextLink } from "../Links/Style";

const CardModalMedico = ({ visible, navigation, setShowModalAppointment, ...rest }) => {

  async function ConsultationLocacation() {
    navigation.navigate("ConsultationLocacation")
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        {/* Content */}
        <ModalContent>
          <ImageUserModal
            source={require("../../assets/Rectangle 422.png")}
          />
          <ModalTitle>Dr Claudio</ModalTitle>

          <TextBox>
            <SubTitleTextModal>Clinico geral</SubTitleTextModal>
            <SubTitleTextModal>CRM-15286</SubTitleTextModal>
          </TextBox>

          <ButtonSecondary onPress={() => ConsultationLocacation()}>
            <ButtonSecondaryTitleModal>VER LOCAL DA CONSULTA</ButtonSecondaryTitleModal>
          </ButtonSecondary>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export default CardModalMedico;
