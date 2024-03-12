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

import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Profile } from './src/screens/profile/profile';
import { HomePatient } from './src/screens/homePatient/homePatient';
import { HomeDoctor } from './src/screens/homeDoctor/homeDoctor';
import { MedicalRecords } from './src/screens/medicalRecords/medicalRecords';

import { ClinicSelection } from './src/screens/clinicSelection/clinicSelection';
import { MedicalSelection } from './src/screens/medicalSelection/medicalSelection';
import DateSelection from './src/screens/dateSelection/dateSelection';
import { Main } from './src/screens/Main/Main';

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
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
      <Stack.Navigator
        screenOptions={{headerShown : false }}
      >
        {/*  */}
        <Stack.Screen
          name='Login'
          // componente que será chamado
          component={Login}
          // titulo da tela
          options={{title: 'Login'}}
        />
        
        <Stack.Screen
          name='Main'
          // componente que será chamado
          component={Main}
          // titulo da tela
          options={{title: 'Main'}}
        />
        
        <Stack.Screen
          name='Navegacao'
          component={Navigation}
          options={{title: 'Navegacao'}}
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
          name='HomePatient'
          // componente que será chamado
          component={HomePatient}
          // titulo da tela
          options={{title: 'HomePatient'}}
        />
        
        <Stack.Screen
          name='HomeDoctor'
          // componente que será chamado
          component={HomeDoctor}
          // titulo da tela
          options={{title: 'HomeDoctor'}}
        />
        
        <Stack.Screen
          name='MedicalRecords'
          // componente que será chamado
          component={MedicalRecords}
          // titulo da tela
          options={{title: 'MedicalRecords'}}
        />
        
        <Stack.Screen
          name='ClinicSelection'
          // componente que será chamado
          component={ClinicSelection}
          // titulo da tela
          options={{title: 'ClinicSelection'}}
        />
        
        <Stack.Screen
          name='MedicalSelection'
          // componente que será chamado
          component={MedicalSelection}
          // titulo da tela
          options={{title: 'MedicalSelection'}}
        />
        
        <Stack.Screen
          name='DateSelection'
          // componente que será chamado
          component={DateSelection}
          // titulo da tela
          options={{title: 'DateSelection'}}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
