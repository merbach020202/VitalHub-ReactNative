// import { View, Text } from "react-native"

import { Logo } from "../../components/Logo/Style"
import { Container } from "../../components/Conteiner/Style"
import { Title } from "../../components/Title/Style"
import { SubTitleText } from "../../components/Subtitulo/Style"
import { Input } from "../../components/Input/Input"
import { Button, ButtonContinue } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"

import { Entypo } from '@expo/vector-icons';
import { ConteinerIcon, Icons } from "../../components/ConteinerIcon/Style"


export const ForgotPassword = ({forgotPassword}) => {
    return (
        // <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        //     <Text>Esqueci minha senha</Text>
        // </View>
        <Container>
            
            <ConteinerIcon>
                <Entypo name="arrow-with-circle-left" size={28} color="#49B3BA" />
            </ConteinerIcon>
            <Logo source={require("../../assets/VitalHub_Logo 1.png")} />
        

            <Title>Recuperar senha</Title>

            <SubTitleText>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitleText>

            <Input placeholder="Usuário ou  Email" />

            <ButtonContinue>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonContinue>   

        </Container>
    )
}