import { Container } from "../Conteiner/Style";
import {
  BigSubTitle,
  ButtonSecondaryIconMedical,
  ButtonTitleIconMedical,
  Card,
  ConteinerButton,
  ConteinerCard,
  ConteinerIcon,
  ConteinerImage,
  ConteinerText,
  ContentAccount,
  DoctorImage,
  SmallSubTitle,
  StarConteiner,
  StarText,
  TextLink,
  TitleClinic,
} from "./Style";

import { AntDesign } from "@expo/vector-icons";

export const CardsMedicalSelection = () => {
  return (
    <Container>
      <TitleClinic>Selecionar Médico</TitleClinic>

      <ConteinerCard>

        <Card>

          <ConteinerImage>
            <DoctorImage source={require("../../assets/MedicoImg.jpg")} />
          </ConteinerImage>

          <ConteinerText>
            <BigSubTitle>Dr Alessandro</BigSubTitle>
            <SmallSubTitle>Demartologia, Estetcista</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>
          </ConteinerIcon>

        </Card>

        <Card>

          <ConteinerImage>
            <DoctorImage source={require("../../assets/MedicoImg.jpg")} />
          </ConteinerImage>

          <ConteinerText>
            <BigSubTitle>Dr Alessandro</BigSubTitle>
            <SmallSubTitle>Demartologia, Estetcista</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>
          </ConteinerIcon>

        </Card>

        <Card>

          <ConteinerImage>
            <DoctorImage source={require("../../assets/Medico(Alessandra).png")} />
          </ConteinerImage>

          <ConteinerText>
            <BigSubTitle>Dra Alessandra</BigSubTitle>
            <SmallSubTitle>Demartologia, Estetcista</SmallSubTitle>
          </ConteinerText>

          <ConteinerIcon>
            <StarConteiner>
              <AntDesign name="star" size={24} color="orange" />
              <StarText>4,5</StarText>
            </StarConteiner>
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
