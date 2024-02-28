import { Container } from "../../components/Conteiner/Style";

import { ListComponent } from "../../components/List/List";
import { CardsClinicSelection } from "../../components/CardsClinicSelection/CardsClinicSelection";
import { useState } from "react";
import { CardsMedicalSelection } from "../../components/CardsMedicalSelection/CardsMedicalSelection";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendente" },
  { id: 2, nome: "Carlos", situacao: "Realizado" },
  { id: 3, nome: "Carlos", situacao: "Agendado" },
  { id: 4, nome: "Carlos", situacao: "Realizado" },
  { id: 5, nome: "Carlos", situacao: "Cancelado" },
];

export const MedicalSelection = () => {
  const [statusList, setStatusList] = useState("Pendente");
  return (
    <Container>
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusList == item.situacao && (
            <CardsMedicalSelection
            />
          )
        }
      />
    </Container>
  );
};
