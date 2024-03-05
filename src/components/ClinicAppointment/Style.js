import styled from "styled-components"

export const ModalConteiner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 90%;
  height: 650px;
  padding: 30px 30px 10px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
`;

// export const ModalConteiner = styled.SafeAreaView`
//     height: 200px;
// `

export const Title = styled.Text`
    font-size: 20px;

    
    margin-bottom: -5px;

    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const SubTitleText = styled.Text`
    text-align: center;
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    line-height: 24px;

    margin-bottom: 10px;
    padding: 20px;
`

export const TopicsConteiner = styled.View`
    width: 90%;
    height: 400px;

    align-items: flex-start;
`

export const TopicsBox = styled.View`
    width: 100%;

    align-items: flex-start;
`

export const SubTitleTextBox = styled.Text`
    text-align: center;
    font-family: 'Quicksand_600SemiBold';
    font-size: 16px;
    line-height: 24px;

    margin-top: 25px;
`

export const SubTitleTextBox2 = styled.Text`
    color: #4E4B59;
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
`

export const ButtonSecondary = styled.TouchableOpacity`
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
    width: 90%;

    margin-top: -60px;
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