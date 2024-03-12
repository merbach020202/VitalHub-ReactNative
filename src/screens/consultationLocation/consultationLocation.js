import { ScrollView } from "react-native";
import { Container } from "../../components/Conteiner/Style";
import { LogoPerfil } from "../../components/Logo/Style";
import { ProfileName } from "../../components/Title/Style";
import { BottomProfileInput, BoxInputProfile, ProfileInput } from "../../components/Input/Input";

import {
  BottomInputs,
  LeftInput,
  RightInput,
  SubTitleBox,
  SubTitleText,
  SubTitleTextProfile,
} from "../../components/Subtitle/Style";

export const ConsultationLocation = ({ navigation }) => {
  return (
    
      <Container>

        <SubTitleBox>
          <ProfileName>Richard Kosta</ProfileName>
          <SubTitleText>richard.kosta@gmail.com</SubTitleText>
        </SubTitleBox>

        <BoxInputProfile>

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

      </Container>

  );
};
