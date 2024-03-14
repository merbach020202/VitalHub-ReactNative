import { Container } from "../../components/Conteiner/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Input";
import { ContentAccount, LinkMedium, TextAccount, TextLink } from "../../components/Links/Style";

import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Button, ButtonGoogle, ButtonTitleGoogle, ImageGoogle } from "../../components/Button/Style";

import { AntDesign } from '@expo/vector-icons';

export const Login = ({ navigation }) => {

  // Chama a função de login

  async function Login() {
    navigation.replace("Main") // Aqui quando eu quiser que a main n volte para a login, basta colocar .replace, ao inves de .navigate
  }

  async function ForgotPassword() {
    navigation.navigate("ForgotPassword")
  }

  async function Register() {
    navigation.replace("Register")
  }

  return (
    <Container>

      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou  Email" />

      <Input 
        placeholder="Digite sua Senha" 
        secureTextEntry/>

       <LinkMedium onPress={() => ForgotPassword()}>Esqueceu sua senha?</LinkMedium>

           <Button onPress={() => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

             <ButtonGoogle>
                {/* <ImageGoogle source={require("../../assets/GOOGLE.png")} /> */}
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount onPress={() => Register()}>
                <TextLink>Não tem conta?</TextLink>
                <TextAccount>Crie uma agora!</TextAccount>
            </ContentAccount>
            
    </Container>
  );
};
