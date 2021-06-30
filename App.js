import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screen components
import CursosScreen from "./src/screens/CursosScreen";
import CursoDetailScreen from './src/screens/CursoDetailScreen';
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

//custom components

//import Calculadora from './Calculadora';
//import CalculadoraV2 from './src/components/CalculadoraV2';
import CiclosDeVida from './CiclosDeVida';
import TiposComida from './src/components/TiposComida/TiposComida';
import Users from './src/components/Users';
import Cursos from './src/components/Cursos';

  

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
  },[])

  const CursosStack = createStackNavigator();


  return (
    <NavigationContainer>
      <CursosStack.Navigator>
        {isLoggedIn? (<>
          <CursosStack.Screen name="Cursos" component={CursosScreen} /> 
          <CursosStack.Screen name="Curso" component={CursoDetailScreen} /> 
        
        </>) : (
          <>
            <CursosStack.Screen name="Login" component={LoginScreen} initialParams={{isLoggedIn: isLoggedIn, setIsLoggedIn:setIsLoggedIn}}  /> 
            <CursosStack.Screen name="Signup" component={SignupScreen} initialParams={{isLoggedIn: isLoggedIn, setIsLoggedIn:setIsLoggedIn}}  /> 
           
          </>

        )}
        
      </CursosStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
