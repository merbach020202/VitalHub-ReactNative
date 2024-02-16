import { ScrollView } from "react-native";
import { Container } from "../../components/Conteiner/Style";
import { LogoPerfil } from "../../components/Logo/Style";
import { ProfileName } from "../../components/Title/Style";
import { BottomProfileInput, BoxInputProfile, ProfileInput } from "../../components/Input/Input";
import { Button, ButtonProfile } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import {
  BottomInputs,
  LeftInput,
  RightInput,
  SubTitleBox,
  SubTitleText,
  SubTitleTextProfile,
} from "../../components/Subtitle/Style";

export const Profile = ({ profile }) => {
  return (
    <ScrollView>
      <Container>
        <LogoPerfil source={require("../../assets/ImgLogoPerfil.jpg")} />

        <SubTitleBox>
          <ProfileName>Richard Kosta</ProfileName>
          <SubTitleText>richard.kosta@gmail.com</SubTitleText>
        </SubTitleBox>

        <BoxInputProfile>
          <SubTitleTextProfile>Data de nascimento</SubTitleTextProfile>
          <ProfileInput placeholder="04/05/1999" />

          <SubTitleTextProfile>CPF</SubTitleTextProfile>
          <ProfileInput placeholder="859********" secureTextEntry />

          <SubTitleTextProfile>Endereço</SubTitleTextProfile>
          <ProfileInput placeholder="Rua Vicenso Silva, 987" />

          <BottomInputs>

            <LeftInput>
              <SubTitleTextProfile>Cep</SubTitleTextProfile>

              <BottomProfileInput placeholder="06548-909" secureTextEntry />
            </LeftInput>

            <RightInput>
              <SubTitleTextProfile>Cidade</SubTitleTextProfile>

              <BottomProfileInput placeholder="Moema-SP" />
            </RightInput>

          </BottomInputs>

        </BoxInputProfile>

        <ButtonProfile>
          <ButtonTitle>Salvar</ButtonTitle>
        </ButtonProfile>

        <Button>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>

      </Container>
    </ScrollView>
  );
};
