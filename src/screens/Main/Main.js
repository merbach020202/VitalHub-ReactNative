// Importar o recurso do bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomePatient } from "../../screens/homePatient/homePatient"
import { HomeDoctor } from "../homeDoctor/homeDoctor"
import { Login } from "../login/login"

// Aqui, uma variável vai receber o createBottomTabNavigator
const BottomTab = createBottomTabNavigator()

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={ ({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent", 
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {

                    if ( route.name === "Home" ) {
                        return (
                            <>
                                
                            </>
                        )
                    }

                }
            })}
        >
            
            <BottomTab.Screen
                name="HomePatient"
                component={HomePatient}
            />
            
            <BottomTab.Screen
                name="Home"
                component={HomeDoctor}
            />
            
        </BottomTab.Navigator>
    )
}