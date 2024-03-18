import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";

export const AppointmentCardPatient = ({
  situacao = "Pendente",
  onPressCancel,
  navigation,
  onPressAppointment,
  onPressCardDoctor,
}) => {

  async function MedicalRecordsPatient() {
    navigation.replace("MedicalRecordsPatient")
  }

  return (

        <ContainerCardList onPress={onPressCardDoctor} navigation={navigation}>
          <ProfileImage source={require("../../assets/Rectangle 422.png")} />

          <ContentCard>
            <DataProfileCard>
              <ProfileName>Dr Cláudio</ProfileName>

              <ProfileData>
                <TextAge>22</TextAge>
                <TextBold>Rotina</TextBold>
              </ProfileData>
            </DataProfileCard>

            <ViewRow>
              <ClockCard situacao={situacao}>
                <AntDesign
                  name="clockcircle"
                  size={14}
                  color={situacao == "Pendente" ? "#49B3BA" : "#8C8A97"}
                />
                <TextBold situacao={situacao} color={"#49B3BA"}>
                  14:00
                </TextBold>
              </ClockCard>

              {situacao == "Cancelado" ? (
                <></>
              ) : situacao == "Pendente" ? (
                <ButtonCard onPress={onPressCancel}>
                  <ButtonText situacao={situacao}>Cancelar</ButtonText>
                </ButtonCard>
              ) : (
                <ButtonCard onPress={() => MedicalRecordsPatient()}>
                  <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                </ButtonCard>
              )}
            </ViewRow>
          </ContentCard>
        </ContainerCardList>

  );
};
