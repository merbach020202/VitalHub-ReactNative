import { Container } from "../Conteiner/Style";
import {
  BigSubTitle,
  ButtonCard,
  ButtonSecondaryIconMedical,
  ButtonText,
  ButtonTitleIconMedical,
  Card,
  ConteinerButton,
  ConteinerCard,
  ConteinerIcon,
  ConteinerText,
  ContentAccount,
  SmallSubTitle,
  StarConteiner,
  StarText,
  TextLink,
  TitleClinic,
  WeekDaysConteiner,
  WeekDaysSubTitle,
} from "./Style";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export const CardsClinicSelection = () => {
  return (
    <Container>
      <TitleClinic>Selecionar Clínica</TitleClinic>

      <ConteinerCard>

        <Card>
          <ConteinerText>
            <BigSubTitle>Clínica Natureh</BigSubTitle>
            <SmallSubTitle>São Paulo, SP</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>

            <WeekDaysConteiner>
              <FontAwesome5 name="calendar-day" size={14} color="#49B3BA" />
              <WeekDaysSubTitle>Seg-Sex</WeekDaysSubTitle>
            </WeekDaysConteiner>
          </ConteinerIcon>
        </Card>

        <Card>
          <ConteinerText>
            <BigSubTitle>Clínica Natureh</BigSubTitle>
            <SmallSubTitle>São Paulo, SP</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>

            <WeekDaysConteiner>
              <FontAwesome5 name="calendar-day" size={14} color="#49B3BA" />
              <WeekDaysSubTitle>Seg-Sex</WeekDaysSubTitle>
            </WeekDaysConteiner>
          </ConteinerIcon>
        </Card>

        <Card>
          <ConteinerText>
            <BigSubTitle>Clínica Natureh</BigSubTitle>
            <SmallSubTitle>São Paulo, SP</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>

            <WeekDaysConteiner>
              <FontAwesome5 name="calendar-day" size={14} color="#49B3BA" />
              <WeekDaysSubTitle>Seg-Sex</WeekDaysSubTitle>
            </WeekDaysConteiner>
          </ConteinerIcon>
        </Card>

      </ConteinerCard>
      
      <ConteinerButton>

        <ButtonSecondaryIconMedical>
          <ButtonTitleIconMedical>CONFIRMAR</ButtonTitleIconMedical>
        </ButtonSecondaryIconMedical>

        <ContentAccount>
          <TextLink>Cancelar</TextLink>
        </ContentAccount>
        
      </ConteinerButton>
    </Container>
  );
};
