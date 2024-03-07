import { ContainerHeader } from "../Conteiner/Style"
import { ConteinerIconHeader } from "../ConteinerIcon/Style";
import { BoxUser, ConteinerIcon, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import { Ionicons } from '@expo/vector-icons';

export const HeaderPatient = ({ navigation }) => {

    async function Profile() {
        navigation.navigate("Profile")
    }

    return (

        <ContainerHeader>
            <BoxUser onPress={() => Profile()}>
                 <ImageUser
                    source={require("../../assets/ImgHeader.jpg")}
                 />

                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NameUser>Eduardo M. Brenn</NameUser>
                </DataUser> 

            </BoxUser>
                
            <ConteinerIcon>
                <Ionicons name="notifications" size={24} color="white" />
            </ConteinerIcon>

        </ContainerHeader>
        
    )
}