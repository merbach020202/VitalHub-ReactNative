import { Text, View } from "react-native"
import { Container } from "../../components/Conteiner/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Input"
import { PasswordButton } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { SubTitleText } from "../../components/Subtitle/Style"

import { AntDesign } from '@expo/vector-icons';
import { ConteinerIcon } from "../../components/ConteinerIcon/Style"


export const NewPassword = ({newPassword}) => {
    return (
    <Container>

        <ConteinerIcon>
            <AntDesign name="closecircleo" size={28} color="#49B3BA" />
        </ConteinerIcon>

        <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

        <Title>Redefinir senha</Title>

        <SubTitleText>Insira e confirme sua nova senha</SubTitleText>

        <Input placeholder="Nova Senha"
        secureTextEntry/> 

        <Input 
            placeholder="Confirmar nova senha" 
            secureTextEntry/>

        <PasswordButton>
            <ButtonTitle>Entrar</ButtonTitle>
        </PasswordButton>
            
    </Container>
    )
}