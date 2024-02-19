import { ContainerHeader } from "../Conteiner/Style"
import { ConteinerIconHeader } from "../ConteinerIcon/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return (

        <ContainerHeader>
            <BoxUser>
                 <ImageUser
                    source={require("../../assets/ImgLogoPerfil.jpg")}
                 />

                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NameUser>Dr Claudio</NameUser>
                </DataUser> 

            </BoxUser>
                
            <ConteinerIconHeader>
                <Ionicons name="notifications" size={24} color="white" />
            </ConteinerIconHeader>

        </ContainerHeader>
        
    )
}