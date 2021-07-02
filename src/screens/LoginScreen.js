import axios from 'axios';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = ({route, navigation}) => {
    const {isLoading} = route.params;

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        const params = {
            username: user,
            password: password
        }
        axios.post("http://192.168.0.3:8080/api/auth/signin", params)
        .then(response =>{
            const { setIsLoggedIn, setIsLoggedInStorage, setUserData } =
              route.params;
            setIsLoggedIn(true)
            setIsLoggedInStorage("Y")
            setUserData(response.data);
        })
        .catch(error => console.error(error));
    }

    if(isLoading){
      return (<View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Cargando...</Text>
      </View >)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{"Iniciar Session"}</Text>

        <TextInput
          style={styles.input}
          value={user}
          onChangeText={(valor) => setUser(valor)}
          placeholder={"Usuario"}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(valor) => setPassword(valor)}
          placeholder={"Contraseña"}
        />

        <View
          style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
        >
          <Text>No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#0000EE" }}>Registrate</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.textButton}>{"Iniciar Session"}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",

    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 42,
    width: "90%",
    margin: 12,
    fontSize: 16,
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "90%",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
  textLink:{

  }
});
