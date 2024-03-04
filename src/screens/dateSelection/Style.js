import styled from "styled-components";

export const TitleCalendar = styled.Text`
    font-size: 20px;

    margin-top: 50px;
    margin-bottom: 20px;

    align-self: center;
    
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`

// export const CalendarHeader = styled.View`
//     width: 90%;
//     height: 45%;

//     align-items: center;

//     background-color: transparent;
// `

export const ConteinerBottom = styled.View`    
    width: 90%;
    height: 250px;

    margin-top: 250px;

    align-self: center;
    justify-self: center;
`

export const Label = styled.Text`
    margin-top: 20px;
    
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
`

export const InputCalendar = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: 100%;
    height: 53px;
    padding: 16px;
    margin-top: 10px;
    margin-left: 30px;
    
    border: 2px solid #49b3ba;
    border-radius: 5px;
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';

    align-items: center;
    justify-content: space-evenly;
`

export const InputBox = styled.View`
    flex-direction: row;
    
    align-items: center;
    justify-content: space-evenly;
    
    position: fixed;
`

export const ConteinerIcon = styled.TouchableOpacity`
    margin-top: 15px;
    
    margin-right: 60px;
`

export const ButtonSecondaryIconMedical = styled.TouchableOpacity`
  width: 100%;
  height: 53px;

  justify-content: center;
  align-items: center;

  background-color: #496bba;
  color: #496bba;
  border-radius: 5px;
`;

export const ButtonTitleIconMedical = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  color: #607ec5;
  font-size: 12px;
  color: white;
`;

export const ConteinerButton = styled.View`
    height: 150px;
    width: 100%;

    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
`

export const ContentAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
`

export const TextLink = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';

    margin-top: 10px;
    margin-bottom: 15px;
    
    align-self: flex-start;
    margin-left: 20px;
    text-decoration: underline;
    color: #344F8F;
`