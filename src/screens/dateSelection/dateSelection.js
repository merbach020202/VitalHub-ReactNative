import React, { useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";

import { Container } from "../../components/Conteiner/Style";
import { ButtonSecondaryIconMedical, ButtonTitleIconMedical, ConteinerBottom, ConteinerButton, ConteinerIcon, ContentAccount, InputBox, InputCalendar, Label, TextLink, TitleCalendar } from "./Style";

import { Octicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useFonts, MontserratAlternates_600SemiBold, Quicksand_600SemiBold } from "expo-font";
import moment from "moment";
import { ClinicAppointment } from "../../components/ClinicAppointment/ClinicAppointment";

const DateSelection = () => {
  const [selectDate, setSelectDate] = useState("");

  const handleDatePress = (date) => {
    setSelectDate(date);
  };

  const markedDates = {
    [selectDate]: {
      selected: true,
      selectedColor: "#60BFC5",
      dotColor: "#60BFC5",
    },
  };

  const[fontsLoaded] = useFonts({
    MontserratAlternates_600SemiBold,
    Quicksand_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro".split("_"),
    ],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro".split("_"),
    ],
    monthNamesShort: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez".split("_"),
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb".split("_")],
  };

  LocaleConfig.defaultLocale = "pt-br";

  return (
    <Container>

      <ScrollView>

        <TitleCalendar>Selecione a data</TitleCalendar>

        {/* <CalendarHeader> */}

        <Calendar
          style={{ width: 365, height: 100, backgroundColor: "transparent", alignSelf: "center"}}
          initialDate="2024-03-01"
          minDate="2024-01-01"
          maxDate="2024-12-31"
          hideArrows={true}
          hideExtraDays={true}
          enableSwipeMonths={true}
          markedDates={markedDates}
          onDayPress={(day) => handleDatePress(day.dateString)}
          theme={{
            textSectionTitleColor: "#5F5C6B",
            todayTextColor: "#34898F",
            dayTextColor: "black",

            textDayFontFamily: "Quicksand_600SemiBold",
            textMonthFontFamily: "MontserratAlternates_600SemiBold",
            textDayHeaderFontFamily: "Quicksand_600SemiBold",           
          }}
          
          monthFormat={'MMMM yyyy'}
        />
      {/* </CalendarHeader> */}

      <ConteinerBottom>

        <Label>Selecione um horário disponível</Label>

        <InputBox>
          <InputCalendar placeholder="Selecionar horário"></InputCalendar>

        <ConteinerIcon>
          <Octicons name="triangle-down" size={24} color="#34898F" />
        </ConteinerIcon>
          
        </InputBox>

        <ConteinerButton>

          <ButtonSecondaryIconMedical>
            <ButtonTitleIconMedical>CONFIRMAR</ButtonTitleIconMedical>
          </ButtonSecondaryIconMedical>

          <ContentAccount>
            <TextLink>Cancelar</TextLink>
          </ContentAccount>
        
      </ConteinerButton>

      </ConteinerBottom>

      <ClinicAppointment
      
      />

      </ScrollView>

    </Container>
  );
};

export default DateSelection;
