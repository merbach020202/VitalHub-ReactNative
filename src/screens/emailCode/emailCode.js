import { Text, View } from "react-native"
import { Container, ManyInputs } from "../../components/Conteiner/Style"
import { ConteinerIcon } from "../../components/ConteinerIcon/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { SubTitleText } from "../../components/Subtitle/Style"
import { InputEmailCode } from "../../components/Input/Input"
import { ButtonContinue } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"

import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount, TextAccountEmailCode } from "../../components/Links/Style"


export const EmailCode = ({ navigation }) => {

    async function Login () {
        navigation.navigate("Login")
    }

    async function NewPassword () {
        navigation.navigate("NewPassword")
    }

    return (
        <Container>

            <ConteinerIcon onPress={() => Login()}>
                <AntDesign name="closecircleo" size={28} color="#49B3BA" />
            </ConteinerIcon>
            
            <Logo source={require("../../assets/VitalHub_Logo 1.png")} />
        

            <Title>Verifique seu e-mail</Title>

            <SubTitleText>Digite o código de 4 dígitos enviado para</SubTitleText>
            <TextAccountEmailCode>Username@email.com</TextAccountEmailCode>

            <ManyInputs>
                <InputEmailCode placeholder="0" />
                <InputEmailCode placeholder="0" />
                <InputEmailCode placeholder="0" />
                <InputEmailCode placeholder="0" />
            </ManyInputs>
            

            <ButtonContinue  onPress={() => NewPassword()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </ButtonContinue>

            <ContentAccount>
                <TextAccount>Reenviar código</TextAccount>
            </ContentAccount>

        </Container>
    )
}