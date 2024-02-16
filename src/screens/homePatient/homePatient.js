
import { ButtonHomePatient, ButtonHomePatientUnico } from "../../components/Button/Style"
import { ButtonTitle, ButtonTitleHomePatient } from "../../components/ButtonTitle/Style"
import { ButtonConteiner, Container } from "../../components/Conteiner/Style"
import { ConteinerIconHomePatient } from "../../components/ConteinerIcon/Style"
import { Header } from "../../components/Header/Header"

import { FontAwesome5 } from '@expo/vector-icons';

export const HomePatient = () => {
    return (
        <Container>
            <Header/>





            {/* Calendar */}






            <ButtonConteiner>

                <ButtonHomePatientUnico>
                    <ButtonTitle>Agendadas</ButtonTitle>
                </ButtonHomePatientUnico>

                <ButtonHomePatient>
                    <ButtonTitleHomePatient>Realizadas</ButtonTitleHomePatient>
                </ButtonHomePatient>

                <ButtonHomePatient>
                    <ButtonTitleHomePatient>Canceladas</ButtonTitleHomePatient>
                </ButtonHomePatient>
            
            </ButtonConteiner>


            <ConteinerIconHomePatient>
                <FontAwesome5 name="stethoscope" size={24} color="white" />
            </ConteinerIconHomePatient>
            

        </Container>

    )
}