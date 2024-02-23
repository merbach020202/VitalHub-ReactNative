import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from './Style';

export const AppointmentCardDoctor = ({
    situacao = "Cancelado",
    onPressCancel,
    onPressAppointment,
}) => {
    return(
        <>
    
            <ContainerCardList>

                <ProfileImage source={require("../../assets/PerfilImg1.jpg")}/>

                <ContentCard>

                    <DataProfileCard>
                        <ProfileName>Niccole Sarga</ProfileName>

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
                            ) : situacao == "Cancelado" ? (
                                <ButtonCard onPress={onPressCancel} >
                                    <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                </ButtonCard>
                            ) : (
                                <ButtonCard onPress={onPressAppointment} >
                                    <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                                </ButtonCard>
                            )
                        }

                        {/*<ButtonCard>
                            <BUttonText>Cancelar</BUttonText>
                        </ButtonCard>*/}
                    </ViewRow> 

                </ContentCard>

            </ContainerCardList>
            
            <ContainerCardList>

                <ProfileImage source={require("../../assets/ImgLogoPerfil.jpg")}/>

                <ContentCard>

                    <DataProfileCard>
                        <ProfileName>Richard Kosta</ProfileName>

                        <ProfileData>
                            <TextAge>28</TextAge>
                            <TextBold>Urgência</TextBold>
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
                            ) : situacao == "Cancelado" ? (
                                <ButtonCard onPress={onPressCancel} >
                                    <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                </ButtonCard>
                            ) : (
                                <ButtonCard onPress={onPressAppointment} >
                                    <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                                </ButtonCard>
                            )
                        }

                        {/*<ButtonCard>
                            <BUttonText>Cancelar</BUttonText>
                        </ButtonCard>*/}
                    </ViewRow> 

                </ContentCard>

            </ContainerCardList>                 

        </>
    )
}