import { Text, View } from "react-native"
import { Container } from "../../components/Conteiner/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { SubTitleText } from "../../components/Subtitle/Style"
import { Input } from "../../components/Input/Input"
import { PasswordButton } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { ContentAccount, TextAccount } from "../../components/Links/Style"


export const Register = ({ navigation }) => {

    async function Login() {
        navigation.replace("Login")
    }

    async function HomePatient() {
        navigation.replace("Main")
    }

    return (
        <Container>

        <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

        <Title>Criar conta</Title>

        <SubTitleText>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitleText>

        <Input placeholder="Usuário ou E-mail"/> 

        <Input 
            placeholder="Senha" 
            secureTextEntry/>

        <Input 
            placeholder="Confirmar Senha" 
            secureTextEntry/>

        <PasswordButton onPress={() => HomePatient()}>
            <ButtonTitle>Cadastrar</ButtonTitle>
        </PasswordButton>

        <ContentAccount onPress={() => Login()}>
                <TextAccount>Cancelar</TextAccount>
        </ContentAccount>
            
    </Container>
    )
}