import {
  ButtonHomePatient
} from "../../components/Button/Style";
import {
  ButtonTitleHomePatient,
} from "../../components/ButtonTitle/Style";
import { ButtonConteiner, Container } from "../../components/Conteiner/Style";

import CalendarList from "../../components/Calendar/CalendarStrip";
import { ListComponent } from "../../components/List/List";
import { useState } from "react";
import { AppointmentCardPatient } from "../../components/AppointmentCardPatient/AppointmentCardPatient";
import { HeaderPatient } from "../../components/HeaderPatient/HeaderPatient";
import CancelationModal from "../../components/CancelationModal/CancelationModal";
import { ConteinerIconHomePatient, HoldConteiner } from "../../components/ConteinerIcon/Style";
import { FontAwesome5 } from "@expo/vector-icons";
import IconMedicalModal from "../../components/IconMedicalModal/IconMedicalModal";
import CardModalMedico from "../../components/cardModal/cardModal";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendente" },
  { id: 2, nome: "Carlos", situacao: "Realizado" },
  { id: 3, nome: "Carlos", situacao: "Agendado" },
  { id: 4, nome: "Carlos", situacao: "Realizado" },
  { id: 5, nome: "Carlos", situacao: "Cancelado" },
];

export const HomePatient = ({ navigation }) => {
  const [statusList, setStatusList] = useState("Pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalIconMedical, setShowModalIconMedical] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);

  async function MedicalRecordsPatient() {
    navigation.replace("MedicalRecordsPatient")
  }

  return (
    <Container>
      <HeaderPatient navigation={navigation}/>

      <CalendarList />

      <ButtonConteiner>

        <ButtonHomePatient 

          clickButton={statusList === "Pendente"} 
          textButton={"Pendente"} 
          onPress={() => {setStatusList("Pendente")}}>

          <ButtonTitleHomePatient 
            clickButton={ statusList === "Pendente"}>Agendadas
          </ButtonTitleHomePatient>
        </ButtonHomePatient>


        <ButtonHomePatient 

          clickButton={statusList === "Realizado"} 
          textButton={"Realizado"}  
          onPress={() => {setStatusList("Realizado")}}>

          <ButtonTitleHomePatient
            clickButton={ statusList === "Realizado"}>Realizadas
          </ButtonTitleHomePatient>
        </ButtonHomePatient>


        <ButtonHomePatient 

          clickButton={statusList === "Cancelado"} 
          textButton={"Cancelado"}  
          onPress={() => {setStatusList("Cancelado")}}>
          
          <ButtonTitleHomePatient
            clickButton={ statusList === "Cancelado"}>Canceladas
          </ButtonTitleHomePatient>
        </ButtonHomePatient>

      </ButtonConteiner>

      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusList == item.situacao && (
            <AppointmentCardPatient
              situacao={item.situacao}
              navigation={navigation}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointmentCardPatient={() => setShowModalIconMedical(true)
                // Aqui vem o modal do medico
              }
              onPressCardDoctor={() => setShowModalDoctor(true)}
            />
          )
        }
      />

      <CancelationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
        navigation={navigation}
      />

      <CardModalMedico
        visible={showModalDoctor}
        setShowModalDoctor={setShowModalDoctor}
        navigation={navigation}
      />

      <HoldConteiner>
        <ConteinerIconHomePatient onPress={() => setShowModalIconMedical(true)}>
          <FontAwesome5 name="stethoscope" size={24} color="white" />
        </ConteinerIconHomePatient>
      </HoldConteiner>

      <IconMedicalModal
        visible={showModalIconMedical}
        setShowModalCancel={setShowModalIconMedical}
        navigation={navigation}
      />

      {/* <Footer /> */}
    </Container>
  );
};
