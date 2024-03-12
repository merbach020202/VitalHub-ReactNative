import styled from "styled-components";
import { Button } from "../Button/Style";

export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 90%;
  height: 440px;
  padding: 30px 30px 10px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ImageUserModal = styled.Image`
    width: 285px;
    height: 181px;

    border-radius: 10px;

    margin-bottom: 20px;
`

export const ModalText = styled.Text`
width: 270px;
font-size: 16px;
color: #5f5c6b;
line-height: 22px;
text-align: center;
margin-top: 10px; 
font-family: "Quicksand_500Medium";
`
export const ButtonModal = styled(Button)`
    width: 80%;
`

export const TextBox = styled.View`
    flex-direction: row;
    gap: 15px;
    margin-bottom: 10px;
`

export const SubTitleTextModal = styled.Text`
    color: grey;
    text-align: center;
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    line-height: 24px;

    padding: 10px;
`

export const ButtonSecondaryTitleModal = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    color: white;
    font-size: 14px;
`

export const ModalTitle = styled.Text`
    font-size: 20px;
    margin-bottom: 5px;
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`

