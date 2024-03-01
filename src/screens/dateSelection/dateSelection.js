import React, { useState } from "react";

import { Calendar } from "react-native-calendars";

import { Container } from "../../components/Conteiner/Style";
import { CalendarHeader, ConteinerBottom, InputCalendar, Label, TitleCalendar } from "./Style";

import { Octicons } from '@expo/vector-icons';

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

  return (
    <Container>

        <TitleCalendar>Selecione a data</TitleCalendar>

        <CalendarHeader>

        <Calendar
          style={{ width: 330, height: 100, backgroundColor: "#FBFBFB" }}
          initialDate="2024-03-01"
          minDate="2024-01-01"
          maxDate="2024-12-31"
          hideArrows={true}
          hideExtraDays={true}
          enableSwipeMonths={true}
          markedDates={markedDates}
          onDayPress={(day) => handleDatePress(day.dateString)}
        />
      </CalendarHeader>

      <ConteinerBottom>
          <Label>Selecione um horário disponível</Label>

          <InputCalendar placeholder="Selecionar horário"></InputCalendar>
          <Octicons name="triangle-down" size={24} color="black" />
      </ConteinerBottom>

    </Container>
  );
};

export default DateSelection;
