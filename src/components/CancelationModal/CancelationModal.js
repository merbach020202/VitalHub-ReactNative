import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecondarTitle, ButtonSecondary } from "../Button/Style";

const CancelationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            
            <Title>Cancelar consulta</Title>

        
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                <ButtonSecondarTitle>Cancelar</ButtonSecondarTitle>
            </ButtonSecondary>
        </Modal>
    )
}

export default CancelationModal