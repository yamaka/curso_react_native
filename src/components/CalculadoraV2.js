import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
//custom components
import ButtonCustom from "./ButtonCustom";


const CalculadoraV2 = () =>{
    const [numeroA, setNumeroA] = useState('');
    const [numeroB, setNumeroB] = useState('');
    const [numeroR, setNumeroR] = useState('');
    const [textDisplay, setTextDisplay] = useState('');
    const [operador, setOperador] = useState('')
    const [placeHolder, setPlaceHolder] = useState("Numero A")
  
    const onChangeDisplay = (valor) =>{
        if(operador == ''){
            setNumeroA(parseInt(valor))
            setTextDisplay(valor);
           setPlaceHolder("Numero A")
        }else {
            setNumeroB(parseInt(valor))
            setTextDisplay(valor)
        }
        console.log("onChangeDisplahy valor", valor)
    }

    const operar = (operador) =>{
        console.log("operar")
        if(numeroA != ""){
            setPlaceHolder("Numero B")
            setTextDisplay(''); 
            setOperador(operador);
        }
    }

    const resultado = () =>{
        let resultado = 0;
          switch(operador){
            case '+': resultado = (numeroA + numeroB).toString();  break;
            case '-': resultado = (numeroA - numeroB).toString();  break;
            case '*': resultado = (numeroA * numeroB).toString();  break;
            case '/': resultado = (numeroA / numeroB).toString();  break;
        }
        setTextDisplay(resultado);
        setNumeroA(parseInt(resultado));
    }
    
    const reset = () =>{
        setNumeroA('');
        setNumeroB('');
        setNumeroR('');
        setTextDisplay('');
        setPlaceHolder("Numero A")
        setOperador('');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CaluladoraV2</Text>
            <TextInput
                style={styles.input}
                value={textDisplay}
                onChangeText={onChangeDisplay}
                placeholder={placeHolder}

            />
            <View style={styles.containerButtons}>
                <ButtonCustom textButton="+" onPress={() => operar('+')}/>
                <ButtonCustom textButton="-" onPress={() => operar('-')}/>
                <ButtonCustom textButton="*" onPress={() => operar('*')}/>
                <ButtonCustom textButton="/" onPress={() => operar('/')}/>
                <ButtonCustom textButton="=" onPress={() => resultado()}/>
            </View>

            <View style={[styles.containerButtons, {justifyContent:"flex-end", paddingRight: 5}]}>
                <ButtonCustom textButton="reset" onPress={() => reset()}/>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 5
    },
    title:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },
    input:{
        borderColor: 'black',
        textAlign:'right',
        borderWidth:1,
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        margin:12,
        fontSize:20
    },
    containerButtons:{
        marginTop:30,
        flexDirection:"row",
        justifyContent:"space-around"
    }

})

export default CalculadoraV2;
