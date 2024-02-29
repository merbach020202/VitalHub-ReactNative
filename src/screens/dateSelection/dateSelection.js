import React from 'react';

import { Calendar } from 'react-native-calendars';
import { Container } from '../../components/Conteiner/Style';

const DateSelection = () => {
  return (
    <Container>

      <Calendar
        current={'2024-02-29'}
        minDate={'2024-01-01'}
        maxDate={'2024-12-31'}
      
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      
        // Formatos de texto personalizados
        markedDates={{
          '2024-02-29': { marked: true, dotColor: 'red' },
          '2024-02-28': { marked: true, dotColor: 'red' }
        }}
      
        // Modo de exibição
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
      
        // Outras configurações
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
      />

    </Container>
  );
};

export default DateSelection;