import { ScrollView, Text } from "react-native";
import { Container } from "../../components/Conteiner/Style";
import { LogoPerfil } from "../../components/Logo/Style";
import { ProfileName } from "../../components/Title/Style";
import { Input, ProfileInput } from "../../components/Input/Input";
import { LinkMedium } from "../../components/Links/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { SubTitleBox, SubTitleText } from "../../components/Subtitle/Style";

export const Profile = ({ profile }) => {
  return (
    <ScrollView>

      <Container>

        <LogoPerfil source={require("../../assets/ImgLogoPerfil.jpg")} />

        <ProfileName>Richard Kosta</ProfileName>

        <SubTitleBox>
          <SubTitleText>22 anos</SubTitleText>
          <SubTitleText>richard.kosta@gmail.com</SubTitleText>
        </SubTitleBox>


        <Text>Descrição</Text>
        <ProfileInput placeholder="Descrição" />

        <Input placeholder="Digite sua Senha" secureTextEntry />

        <ProfileInput placeholder="Prescrição médica" />

        <LinkMedium>Esqueceu sua senha?</LinkMedium>

        <Button>
          <ButtonTitle>Entrar</ButtonTitle>
        </Button>
        
      </Container>

    </ScrollView>
  );
};
