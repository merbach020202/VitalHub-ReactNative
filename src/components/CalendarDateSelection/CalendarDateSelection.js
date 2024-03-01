import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { DayContainer, DayText } from './Style';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'br';

export default function CalendarDateSelection({ selectedDate = '', handleSelectedDateFn = null }) {
    const currentDate = new Date().toUTCString();

    return (
        <Calendar 
            minDate={currentDate} 
            monthFormat='MMMM yyyy'
            enableSwipeMonths={true}
            hideArrows={true}
            style={styles.calendar}
            theme={{
                dotColor: '#60BFC5',
                calendarBackground: '#FBFBFB',
                width: 32,
                height: 32,
                borderRadius: 20
            }}
            dayComponent={({ date, state }) =>
                <TouchableOpacity onPress={() => {
                    if (state == 'disabled')
                        return;

                    handleSelectedDateFn(date.dateString)
                }}>
                    <DayContainer isSelected={date.dateString == selectedDate}>
                        <DayText isSelected={date.dateString == selectedDate} isDisabled={state == 'disabled'}>{ date.day }</DayText>
                    </DayContainer>
                </TouchableOpacity>
            }
        />
    )
}

const styles = StyleSheet.create({
    calendar: {
        width: 380,
    }
});