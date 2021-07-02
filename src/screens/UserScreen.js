import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'

const UserScreen = ({route, navigation}) => {
    
    const { getUserData, logout } = route.params;
    const [userData, setUserData] = useState({
        username:"",
        email:""
    })
    useEffect(() =>{
       getUserDataStorage();
    },[])

    const getUserDataStorage = async () =>{
        try {
            const userStorage = await getUserData();
            setUserData({
            ...userData,
            ...{ username: userStorage.username, email: userStorage.email },
            });
            
        } catch (error) {
            console.error("getUserDataStorage", error);
        }
    }


    return (
      <View style={styles.container}>
        <Text>Datos del Usuario</Text>

        <View>
          <View style={styles.labelText}>
            <Text>Usuario: </Text>
            <Text> {userData.username}</Text>
          </View>
          <View style={styles.labelText}>
            <Text>Email: </Text>
            <Text> {userData.email}</Text>
          </View>
        </View>

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
