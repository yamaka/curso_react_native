import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";

//screen components
import CursosScreen from "./src/screens/CursosScreen";
import CursoDetailScreen from './src/screens/CursoDetailScreen';
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import  UserScreen  from "./src/screens/UserScreen";

//custom components

//import Calculadora from './Calculadora';
//import CalculadoraV2 from './src/components/CalculadoraV2';
import CiclosDeVida from './CiclosDeVida';
import TiposComida from './src/components/TiposComida/TiposComida';
import Users from './src/components/Users';
import Cursos from './src/components/Cursos';

  

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    getIsLoggedInStorage();
  },[])

  

  const getIsLoggedInStorage = async () =>{
    let result = null
    try {
      const value = await AsyncStorage.getItem("IsLoggedIn");
      if (value !== null && value == "Y") {
        setIsLoggedIn(true)
      }else if(value == null || value == "N" || value== ""){
        setIsLoggedIn(false)
      }
    } catch (e) {
      // error reading value
      alert("ocurrio un error intentar nuevamente")
    } finally{
      setIsLoading(false);
      
    }
    
  }

  const setIsLoggedInStorage = async (value) => {
      try {
        await AsyncStorage.setItem("IsLoggedIn", value);
      } catch (e) {
        // saving error
        console.error("setIsLoggedInStorage", e);
      }
  }
  const setUserData = async (oUserData) =>{
    try {
      await AsyncStorage.setItem("userData",JSON.stringify(oUserData))
    } catch (error) {
      console.error("setUserData", error);
    }
  }

  const getUserData = async () =>{
    let userData = null;
    try {
        userData = await AsyncStorage.getItem("userData");
        console.log("userData",userData);
       if (userData !== null) {
         userData = JSON.parse(userData);
       } 
    } catch (error) {
      console.error("getUserData",error)
    } finally{
      return userData
    }
  }

  const logout = () =>{
    console.log("logout");
    setIsLoggedIn(false);
    setIsLoggedInStorage("N")
  }


  const CursosStack = createStackNavigator();

  const CursosStackNavigator = () =>{
    return (<CursosStack.Navigator>
     
      
          <CursosStack.Screen name="Cursos" component={CursosScreen} />
          <CursosStack.Screen name="Curso" component={CursoDetailScreen} />
    
    </CursosStack.Navigator>);
  }

  const AuthStack = createStackNavigator();
  const AuthStackNavigator = () =>{
    return (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
            initialParams={{
              isLoggedIn: isLoggedIn,
              setIsLoggedIn: setIsLoggedIn,
              setIsLoggedInStorage: setIsLoggedInStorage,
              setUserData,
              isLoading,
            }}
          />
          <AuthStack.Screen
            name="Signup"
            component={SignupScreen}
            initialParams={{
              isLoggedIn: isLoggedIn,
              setIsLoggedIn: setIsLoggedIn,
            }}
          />
        </AuthStack.Navigator>
    )
  }

  //create a bottom tab navigator
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {isLoggedIn ? 
        <Tab.Navigator>
          <Tab.Screen
            name="Cursos"
            component={CursosStackNavigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Usuario"
            component={UserScreen}
            initialParams={{
              getUserData: getUserData,
              logout,
            }}
            options={{
              tabBarLabel: "Usuario",
              tabBarBadgeStyle: {
                fontSize: 24,
              },
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
              ),
            }}
          />
          </Tab.Navigator>
        : 
          <AuthStackNavigator/>
      }
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
