import { ScrollView } from "react-native";
import { Card, ConteinerCard } from "../../components/CardsClinicSelection/Style";
import {
  Container,
  ConteinerIcon,
  ConteinerText,
  StarConteiner,
  WeekDaysConteiner,
} from "../../components/Conteiner/Style";
import {
  BigSubTitle,
  SmallSubTitle,
  StarText,
  WeekDaysSubTitle,
} from "../../components/Subtitle/Style";
import { TitleClinic } from "../../components/Title/Style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { ListComponent } from "../../components/List/List";
import { CardsClinicSelection } from "../../components/CardsClinicSelection/CardsClinicSelection";
import { useState } from "react";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "Pendente" },
    { id: 2, nome: "Carlos", situacao: "Realizado" },
    { id: 3, nome: "Carlos", situacao: "Agendado" },
    { id: 4, nome: "Carlos", situacao: "Realizado" },
    { id: 5, nome: "Carlos", situacao: "Cancelado" },
  ];

export const ClinicSelection = () => {
    const [statusList, setStatusList] = useState("Pendente");
  return (
    <Container>

      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusList == item.situacao && (
            <CardsClinicSelection
            />
          )
        }
      />

        {/* <ConteinerCard>

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

        </ConteinerCard> */}

    </Container>
  );
};
