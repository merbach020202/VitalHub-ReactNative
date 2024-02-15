import { Container } from "../../components/Conteiner/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Input";
import { ContentAccount, LinkMedium, TextAccount, TextLink } from "../../components/Links/Style";

import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Button, ButtonGoogle, ButtonTitleGoogle, ImageGoogle } from "../../components/Button/Style";

import { AntDesign } from '@expo/vector-icons';

export const Login = ({ login }) => {
  return (
    <Container>

      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou  Email" />

      <Input 
        placeholder="Digite sua Senha" 
        secureTextEntry/>

       <LinkMedium>Esqueceu sua senha?</LinkMedium>

           <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

             <ButtonGoogle>
                {/* <ImageGoogle source={require("../../assets/GOOGLE.png")} /> */}
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextLink>Não tem conta?</TextLink>
                <TextAccount>Crie uma agora!</TextAccount>
            </ContentAccount>
            
    </Container>
  );
};
