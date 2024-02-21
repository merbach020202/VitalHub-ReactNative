import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { BoxIcon, BoxIconFilter, ContainerFooter, IconFooter, TextFooter } from './Style';

export const Footer = () => {
    return (
        <ContainerFooter>

            <IconFooter>

                <BoxIconFilter>
                    <FontAwesome6 name="calendar-check" size={22} color="#607EC5" />
                    <TextFooter>Agenda</TextFooter>
                </BoxIconFilter>

                <BoxIcon>
                    <FontAwesome5 name="hospital" size={22} color="#607EC5" />
                    {/* <TextFooter>Clínicas</TextFooter> */}
                </BoxIcon>

                <BoxIcon>
                    <FontAwesome name="user-circle-o" size={24} color="#607EC5" />
                    {/* <TextFooter>Perfil</TextFooter> */}
                </BoxIcon>
                
            </IconFooter>

        </ContainerFooter>
    )
}