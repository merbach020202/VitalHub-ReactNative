import { ContentIcon, TextIcon } from './Style'

// Importar o recurso do bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomePatient } from "../../screens/homePatient/homePatient"
import { Profile } from "../../screens/profile/profile"


// Aqui, uma variável vai receber o createBottomTabNavigator
const BottomTab = createBottomTabNavigator()

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"

export const Main = ({ navigation }) => {

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
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                            >

                                <FontAwesome name='calendar' size={22} color="#4E4B59" />
                                { focused && <TextIcon>Agenda</TextIcon> }

                            </ContentIcon>
                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                            >

                                <FontAwesome5 name="user" size={22} color="black" />
                                { focused && <TextIcon>Perfil</TextIcon> }

                            </ContentIcon>
                        )
                    }

                }
            })}
        >
            
            <BottomTab.Screen
                name="Home"
                component={HomePatient}
            />
            
            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />
            
        </BottomTab.Navigator>
    )
}