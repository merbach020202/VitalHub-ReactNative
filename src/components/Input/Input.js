import { TextInput } from "react-native";
import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#49b3ba'
})`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;
    
    border: 2px solid #49b3ba;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const InputEmailCode = styled(Input)`
    width: 65px;
    height: 62px;   

    font-family: 'Quicksand_600SemiBold';
    font-size: 40px;

    flex-direction: row;

    padding-left: 20px;
    padding-bottom: 5px;
`

////////////Profile////////////

export const ProfileInput = styled(Input)`
    width: 90%;
    height: 120px;
`