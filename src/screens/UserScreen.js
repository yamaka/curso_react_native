import React, {useEffect, useContext} from 'react'
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native'

import InfoUserData from '../components/InfoUserData'

//context
import UserContext from '../context/UserContext'


const UserScreen = ({route, navigation}) => {
    
    const { getUserData, logout } = route.params;
    const [ userStateContext, setUserStateContext ] = useContext(UserContext); 

    console.log("UserScreen userStateContext", userStateContext);

    useEffect(() =>{
       getUserDataStorage();
    },[])

    const getUserDataStorage = async () =>{
        try {
            const userStorage = await getUserData();
            setUserStateContext({
              ...userStateContext,
              ...{ username: userStorage.username, email: userStorage.email },
            });
            
        } catch (error) {
            console.error("getUserDataStorage", error);
        }
    }



    return (
      <View style={styles.container}>
        <Text>Datos del Usuario</Text>
        <InfoUserData/>
        <View>
            <Button title="Cerra Session" onPress={() => logout()}/>
        </View>
      </View>
    );
}

export default UserScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "space-around"
    },
    labelText:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        padding:5,
        margin: 10
    }

})
