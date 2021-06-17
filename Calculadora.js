import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Calculadora(){
    const [numeroA, setNumeroA] = useState(0);
    const [numeroB, setNumeroB] = useState(0);
    const [numeroR, setNumeroR] = useState(0);
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
        switch (tipo) {
          case "+":
            setNumeroR(numeroA + numeroB);
            break;
          case "-":
            setNumeroR(numeroA - numeroB);
            break;
          case "*":
            setNumeroR(numeroA * numeroB);
            break;
          case "/":
            setNumeroR(numeroA / numeroB);
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
          
        />
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            height: 10,
          }}
        >
          <Button onPress={() => operar("+")} title="+" color="#841584" />
          <Button onPress={() => operar("-")} title="-" color="#841584" />
          <Button onPress={() => operar("*")} title="*" color="#841584" />
          <Button onPress={() => operar("/")} title="/" color="#841584" />
        </View>
        <TextInput
          style={styles.input}
          value={numeroB}
          onChangeText={onChangeNumberB}
          placeholder="Numero B"
          
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
});