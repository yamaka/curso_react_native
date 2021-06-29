import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screen components
import CursosScreen from "./src/screens/CursosScreen";
import CursoDetailScreen from './src/screens/CursoDetailScreen';


//custom components

//import Calculadora from './Calculadora';
//import CalculadoraV2 from './src/components/CalculadoraV2';
import CiclosDeVida from './CiclosDeVida';
import TiposComida from './src/components/TiposComida/TiposComida';
import Users from './src/components/Users';
import Cursos from './src/components/Cursos';
  

export default function App() {
  useEffect(()=>{
  },[])

  const CursosStack = createStackNavigator();


  return (
    <NavigationContainer>
      <CursosStack.Navigator>
        <CursosStack.Screen name="Cursos" component={CursosScreen} />
        <CursosStack.Screen name="Curso" component={CursoDetailScreen} />
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
