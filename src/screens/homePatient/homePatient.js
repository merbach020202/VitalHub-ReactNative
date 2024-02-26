import {
  ButtonHomePatient,
  ButtonHomePatientUnico,
} from "../../components/Button/Style";
import {
  ButtonTitle,
  ButtonTitleHomePatient,
} from "../../components/ButtonTitle/Style";
import { ButtonConteiner, Container } from "../../components/Conteiner/Style";

import CalendarList from "../../components/Calendar/CalendarStrip";
import { ListComponent } from "../../components/List/List";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { AppointmentCardPatient } from "../../components/AppointmentCardPatient/AppointmentCardPatient";
import { HeaderPatient } from "../../components/HeaderPatient/HeaderPatient";
import CancelationModal from "../../components/CancelationModal/CancelationModal";
import { ConteinerIconHomePatient, HoldConteiner } from "../../components/ConteinerIcon/Style";
import { FontAwesome5 } from "@expo/vector-icons";
import IconMedicalModal from "../../components/IconMedicalModal/IconMedicalModal";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendente" },
  { id: 2, nome: "Carlos", situacao: "Realizado" },
  { id: 3, nome: "Carlos", situacao: "Agendado" },
  { id: 4, nome: "Carlos", situacao: "Realizado" },
  { id: 5, nome: "Carlos", situacao: "Cancelado" },
];

export const HomePatient = () => {
  const [statusList, setStatusList] = useState("Pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalIconMedical, setShowModalIconMedical] = useState(false);

  return (
    <Container>
      <HeaderPatient />

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
        renderItem={({ item }) =>
          statusList == item.situacao && (
            <AppointmentCardPatient
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointmentCardPatient={() =>
                setShowModalIconMedical(true)
              }
            />
          )
        }
      />

      <CancelationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <HoldConteiner>
        <ConteinerIconHomePatient onPress={() => setShowModalIconMedical(true)}>
          <FontAwesome5 name="stethoscope" size={24} color="white" />
        </ConteinerIconHomePatient>
      </HoldConteiner>

      <IconMedicalModal
        visible={showModalIconMedical}
        setShowModalCancel={setShowModalIconMedical}
      />

      <Footer />
    </Container>
  );
};
