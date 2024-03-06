import { ContainerHeader } from "../Conteiner/Style"
import { ConteinerIconHeader } from "../ConteinerIcon/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import { Ionicons } from '@expo/vector-icons';

export const HeaderPatient = () => {

    async function Profile() {
        navigator.navigation("Profile")
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
                
            <ConteinerIconHeader>
                <Ionicons name="notifications" size={24} color="white" />
            </ConteinerIconHeader>

        </ContainerHeader>
        
    )
}