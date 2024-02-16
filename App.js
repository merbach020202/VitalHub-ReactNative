import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navigation } from './src/screens/navigation/navigation';
import { ForgotPassword } from './src/screens/forgotPassword/forgotPassword';
import { EmailCode } from './src/screens/emailCode/emailCode';
import { NewPassword } from './src/screens/newPassword/newPassword';
import { Register } from './src/screens/register/register';
import { Login } from './src/screens/login/login';

const Stack = createNativeStackNavigator();

//Import das fontes
import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { Profile } from './src/screens/profile/profile';
import { Home, HomePatient } from './src/screens/homePatient/homePatient';

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
    // Navegação
    //Conteiner
    //StackNavigator
    //StackScreen

    // envolve a estrutura da navegação conteiner
    <NavigationContainer>

      {/* componente para navegação */}
      <Stack.Navigator>

        {/*  */}
        <Stack.Screen
          name='Navegacao'
          // componente que será chamado
          component={Navigation}
          // titulo da tela
          options={{title: 'Navegacao'}}
        />
        
        <Stack.Screen
          name='Login'
          // componente que será chamado
          component={Login}
          // titulo da tela
          options={{title: 'Login'}}
        />
        
        <Stack.Screen
          name='ForgotPassword'
          // componente que será chamado
          component={ForgotPassword}
          // titulo da tela
          options={{title: 'ForgotPassword'}}
        />
        
        <Stack.Screen
          name='EmailCode'
          // componente que será chamado
          component={EmailCode}
          // titulo da tela
          options={{title: 'EmailCode'}}
        />
        
        <Stack.Screen
          name='NewPassword'
          // componente que será chamado
          component={NewPassword}
          // titulo da tela
          options={{title: 'NewPassword'}}
        />
        
        <Stack.Screen
          name='Register'
          // componente que será chamado
          component={Register}
          // titulo da tela
          options={{title: 'Register'}}
        />
        
        <Stack.Screen
          name='Profile'
          // componente que será chamado
          component={Profile}
          // titulo da tela
          options={{title: 'Profile'}}
        />
        
        <Stack.Screen
          name='Home'
          // componente que será chamado
          component={HomePatient}
          // titulo da tela
          options={{title: 'Home'}}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
