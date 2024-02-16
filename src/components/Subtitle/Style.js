import styled from "styled-components";

export const SubTitleText = styled.Text`
    color: grey;
    text-align: center;
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    line-height: 24px;

    padding: 20px;
`
///////////PROFILE///////////

export const SubTitleBox = styled.View`
    position: absolute;

    margin-top: 266px;

    align-items: center;
    justify-items: center;
    width: 70%;

    border-radius: 5px;
    background-color: white;

    elevation: 5px;
`

export const SubTitleTextProfile = styled(SubTitleText)`
    font-family: Quicksand_600SemiBold;
    color: black;

    text-align: start;
    padding: 0;

    margin-bottom: 10px;
`

export const BottomProfileText = styled(SubTitleText)`
    justify-content: space-between;
    align-items: flex-start;
`
export const BottomInputs = styled.View`
    flex-direction: row;
    width: 95%;

    justify-content: space-around;
`

export const LeftInput = styled.View`
    margin-left: -20px;
`

export const RightInput = styled.View`

`