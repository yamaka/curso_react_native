import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function Calculadora(){
    const [numeroA, setNumeroA] = useState('');
    const [numeroB, setNumeroB] = useState('');
    const [numeroR, setNumeroR] = useState('');
    const onChangeNumberA = (valor) =>{
        console.log(valor)
        if(valor !== ""){
            setNumeroA(parseInt(valor))
        }else{
            setNumeroA(valor);
        }
    }
    const onChangeNumberB = (valor) =>{
        console.log(valor)
        if(valor !== ""){
            setNumeroB(parseInt(valor))
        }else{
            setNumeroB(valor);
        }
    }
    const onChangeNumberR = (valor) =>{
        console.log(valor)
        setNumeroR(valor)
    }
    const operar = (tipo) =>{
      console.log("operar", tipo);
        switch (tipo) {
          case "+":
             console.log("operar", numeroA + numeroB);
            setNumeroR((numeroA + numeroB).toString());
            break;
          case "-":
            setNumeroR((numeroA - numeroB).toString());
            break;
          case "*":
            setNumeroR((numeroA * numeroB).toString());
            break;
          case "/":
            setNumeroR((numeroA / numeroB).toString());
            break;
         
        }
    }
    return (
      <View>
        <TextInput
          style={styles.input}
          value={numeroA}
          onChangeText={onChangeNumberA}
          placeholder="Numero A"
          keyboardType="numeric"
          
        />
        <View
          style={{
            flexDirection: "row",
            width: '100%',
            justifyContent: "space-around",
            height: 60,
          }}
        >
          <TouchableOpacity   
            activeOpacity={0.8}
            onPress={() => operar("+")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>{"+"}</Text>
          </TouchableOpacity>


          <TouchableOpacity   
            activeOpacity={0.8}
            onPress={() => operar("-")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>{"-"}</Text>
          </TouchableOpacity>
          <TouchableOpacity   
            activeOpacity={0.8}
            onPress={() => operar("*")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>{"*"}</Text>
          </TouchableOpacity>
          <TouchableOpacity   
            activeOpacity={0.8}
            onPress={() => operar("/")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>{"/"}</Text>
          </TouchableOpacity>
         {/*  <Button onPress={() => operar("+")} title="+" color="#841584" />
          <Button onPress={() => operar("-")} title="-" color="#841584" />
          <Button onPress={() => operar("*")} title="*" color="#841584" />
          <Button onPress={() => operar("/")} title="/" color="#841584" /> */}
        </View>
        <TextInput
          style={styles.input}
          value={numeroB}
          onChangeText={onChangeNumberB}
          placeholder="Numero B"
          keyboardType="numeric"
          
        />
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 32 }}>=</Text>
        </View>
        <TextInput
          style={styles.input}
          value={numeroR}
          placeholder="Resultado"
          keyboardType="numeric"
        />
      </View>
    );

} 

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    paddingLeft: 5,
    borderWidth: 1,
  },
   appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 50,
    justifyContent:"center"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});