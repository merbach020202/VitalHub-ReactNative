import styled from "styled-components";

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: -5px;
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`

////////////Profile////////////
export const ProfileName = styled(Title)`
    margin-top: 20px;
    font-size: 20px;
    font-family: 'MontserratAlternates_600SemiBold';
`
////////////HomePatient////////////
export const TitleCard = styled(Title)`
    font-size: 16px;

    margin-left: 25px;
`
////////////ClinicSelection////////////
export const TitleClinic = styled(ProfileName)`
    position: fixed;

    width: 100%;
    height: 140px;

    padding-top: 70px;
    padding-left: 95px;
`
