import {
  ButtonHomePatient,
  ButtonHomePatientUnico,
} from "../../components/Button/Style";
import {
  ButtonTitle,
  ButtonTitleHomePatient,
} from "../../components/ButtonTitle/Style";
import { ButtonConteiner, Container } from "../../components/Conteiner/Style";
import { Header } from "../../components/Header/Header";

import CalendarList from "../../components/Calendar/CalendarStrip";
import { ListComponent } from "../../components/List/List";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { AppointmentCardPatient } from "../../components/AppointmentCardPatient/AppointmentCardPatient";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendente" },
  { id: 2, nome: "Carlos", situacao: "Realizado" },
  { id: 3, nome: "Carlos", situacao: "Agendado" },
  { id: 4, nome: "Carlos", situacao: "Realizado" },
  { id: 5, nome: "Carlos", situacao: "Cancelado" },
];

export const HomePatient = () => {
  const [statusList, setStatusList] = useState("pendente");

  return (
    <Container>
      <Header />

      <CalendarList />

      <ButtonConteiner>
        <ButtonHomePatientUnico clickButton={statusList === "Pendente"}>
          <ButtonTitle>Agendadas</ButtonTitle>
        </ButtonHomePatientUnico>

        <ButtonHomePatient clickButton={statusList === "Realizado"}>
          <ButtonTitleHomePatient>Realizadas</ButtonTitleHomePatient>
        </ButtonHomePatient>

        <ButtonHomePatient clickButton={statusList === "Cancelado"}>
          <ButtonTitleHomePatient>Canceladas</ButtonTitleHomePatient>
        </ButtonHomePatient>
      </ButtonConteiner>

      <ListComponent 
        data={Consultas}
        keyExtractor={(item) => item.id}

        renderItem={({item}) => 
          statusList == item.situacao && (
            <AppointmentCard
              situacao={item.situacao}
            />
          )
      }
      />

      <AppointmentCardPatient />

      <Footer/>

    </Container>
  );
};
