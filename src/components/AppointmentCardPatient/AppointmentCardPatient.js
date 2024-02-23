import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from './Style';
import { FontAwesome5 } from "@expo/vector-icons";
import { ConteinerIconHomePatient } from '../ConteinerIcon/Style';
import { PatientConteiner } from '../Conteiner/Style';

export const AppointmentCardPatient = ({
    situacao = "Pendente",
    onPressCancel,
    onPressAppointment,
}) => {
    return(
        <>
        <PatientConteiner>
            <ContainerCardList>

                <ProfileImage source={require("../../assets/MedicoImg.jpg")}/>

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
                            <AntDesign name="clockcircle" size={14} color={situacao == "Pendente" ? "#49B3BA" : "#8C8A97"}/>
                            <TextBold situacao={situacao} color={"#49B3BA"}>14:00</TextBold>
                        </ClockCard>

                        {
                            situacao == "Cancelado" ? (
                                <>
                                </>
                            ) : situacao == "Pendente" ? (
                                <ButtonCard onPress={onPressCancel} >
                                    <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                </ButtonCard>
                            ) : (
                                <ButtonCard onPress={onPressAppointment} >
                                    <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                                </ButtonCard>
                            )
                        }

                    </ViewRow> 

                </ContentCard>

            </ContainerCardList>          
            
            <ConteinerIconHomePatient>
                <FontAwesome5 name="stethoscope" size={24} color="white" />
            </ConteinerIconHomePatient>
            
        </PatientConteiner>
        </>
    )
}