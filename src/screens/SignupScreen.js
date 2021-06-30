import axios from "axios";
import React, { useState } from "react";
import { CommonActions } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ route, navigation }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSignup = () => {
      if(password == passwordConfirm){
        const params = {
          username: user,
          email: email,
          password: password,
        };
        axios
          .post("http://192.168.0.3:8080/api/auth/signup", params)
          .then((response) => {
            navigation.dispatch(CommonActions.goBack());
          })
          .catch((error) => console.error(error));
      }else{
          alert("las contrseñas no coincide");
      }
      
      
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{"Registrate"}</Text>

      <TextInput
        style={styles.input}
        value={user}
        onChangeText={(valor) => setUser(valor)}
        placeholder={"Usuario"}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(valor) => setEmail(valor)}
        placeholder={"Email"}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(valor) => setPassword(valor)}
        placeholder={"Contraseña"}
      />
      <TextInput
        style={styles.input}
        value={passwordConfirm}
        onChangeText={(valor) => setPasswordConfirm(valor)}
        placeholder={"Confirmar Contraseña"}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSignup()}>
        <Text style={styles.textButton}>{"Registrarse"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
  textLink: {},
});
