import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
    color: #8c8a97;

    margin-top: 10px;
    margin-bottom: 15px;
    
    align-self: flex-start;
    margin-left: 20px;
    text-decoration: underline;
`

////////////////////////Tudo pertence ao Content Account////////////////////////

export const TextLink = styled(LinkMedium)`
    color: #344F8F;
`

export const ContentAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;

    margin-top: 30px;
`

export const TextAccount = styled(LinkMedium)`
    color: #4D659D;
`

////////////////////////emailCode////////////////////////

export const TextAccountEmailCode = styled(LinkMedium)`
    color: #4D659D;
    margin-top: -20px;
    align-self: center;
`