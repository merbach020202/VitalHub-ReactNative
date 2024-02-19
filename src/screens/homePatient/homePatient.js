import {
  ButtonHomePatient,
  ButtonHomePatientUnico,
} from "../../components/Button/Style";
import {
  ButtonTitle,
  ButtonTitleHomePatient,
} from "../../components/ButtonTitle/Style";
import { StyledCalendarStrip } from "../../components/Calendar/Style";
import {
  ButtonConteiner,
  CardConteiner,
  Container,
  TextConteiner,
} from "../../components/Conteiner/Style";
import { Header } from "../../components/Header/Header";

import { FontAwesome5 } from "@expo/vector-icons";
import CalendarList from "../../components/Calendar/CalendarStrip";
import { BoxUser, ImageUser, ImageUserHomePatient } from "../../components/Header/Style";
import { useState } from "react";
import { TitleCard } from "../../components/Title/Style";
import { SubTitleBox, SubTitleText, SubTitleTextHomePatient, SubTitleTextHomePatientDark } from "../../components/Subtitle/Style";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendente" },
  { id: 2, nome: "Carlos", situacao: "Realizado" },
  { id: 3, nome: "Carlos", situacao: "Agendado" },
  { id: 4, nome: "Carlos", situacao: "Realizado" },
  { id: 5, nome: "Carlos", situacao: "Pendente" },
];

export const HomePatient = () => {
  const [statusList, setStatusList] = useState("pendente");

  return (
    <Container>
      <Header />

      <CalendarList />

      <ButtonConteiner>
        <ButtonHomePatientUnico clickButton={statusList === "pendente"}>
          <ButtonTitle>Agendadas</ButtonTitle>
        </ButtonHomePatientUnico>

        <ButtonHomePatient clickButton={statusList === "realizado"}>
          <ButtonTitleHomePatient>Realizadas</ButtonTitleHomePatient>
        </ButtonHomePatient>

        <ButtonHomePatient clickButton={statusList === "cancelado"}>
          <ButtonTitleHomePatient>Canceladas</ButtonTitleHomePatient>
        </ButtonHomePatient>
      </ButtonConteiner>

      <CardConteiner>
          <ImageUserHomePatient source={require("../../assets/MedicoImg.jpg")} />

            <TextConteiner>
                <TitleCard>Dr Claudio</TitleCard>

                <SubTitleTextHomePatient>22 anos  -</SubTitleTextHomePatient>
                <SubTitleTextHomePatientDark>Rotina</SubTitleTextHomePatientDark>
            </TextConteiner>
            
      </CardConteiner>

      {/* Icone para ser usada na tela de paciente */}

      {/* <ConteinerIconHomePatient>
        <FontAwesome5 name="stethoscope" size={24} color="white" />
      </ConteinerIconHomePatient> */}
    </Container>
  );
};
