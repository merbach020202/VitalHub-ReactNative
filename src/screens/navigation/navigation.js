import { Button, View } from "react-native"
import { ConteinerNav } from "../../components/Conteiner/Style"

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ConteinerNav>
                <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="ForgotPassword"
                onPress={() => navigation.navigate("ForgotPassword")}
            />

            <Button
                title="EmailCode"
                onPress={() => navigation.navigate("EmailCode")}
            />

            <Button
                title="NewPassword"
                onPress={() => navigation.navigate("NewPassword")}
            />

            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
            />

            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />

            <Button
                title="HomePatient"
                onPress={() => navigation.navigate("HomePatient")}
            />

            <Button
                title="HomeDoctor"
                onPress={() => navigation.navigate("HomeDoctor")}
            />

            <Button
                title="MedicalRecords"
                onPress={() => navigation.navigate("MedicalRecords")}
            />

            <Button
                title="ClinicSelection"
                onPress={() => navigation.navigate("ClinicSelection")}
            />

            <Button
                title="MedicalSelection"
                onPress={() => navigation.navigate("MedicalSelection")}
            />

            <Button
                title="DateSelection"
                onPress={() => navigation.navigate("DateSelection")}
            />

            </ConteinerNav>
            
        </View>
    )
}