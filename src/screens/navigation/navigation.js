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
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            </ConteinerNav>
            
        </View>
    )
}