import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Calculadora from './Calculadora';
//import CalculadoraV2 from './src/components/CalculadoraV2';
import CiclosDeVida from './CiclosDeVida';
import TiposComida from './src/components/TiposComida/TiposComida';
import Users from './src/components/Users';
import Cursos from './src/components/Cursos';

const repasoes6 = () =>{
  console.log("hola mundo");
  //repaso es6 o superior
  //variables y constantes es6 >
  /* var nombre = "Susana";
    console.log(nombre);
    var nombre = "Eliana";
    console.log(nombre); */
  let nombre1 = "Susana";
  nombre1 = "Eliana";
  console.log(nombre1);
  //constantes
  //const miconstantepi = "3.1416";
  //miconstantepi = "alskfdj";
  //funciones felcha en es6 o superior
  function mifuncion() {
    console.log("mi funcion");
  }
  mifuncion();

  const miFuncionFlecha = () => {
    console.log("mi funcion flecha");
  };
  miFuncionFlecha();

  setTimeout(function () {
    console.log("paso 2 segundos");
  }, 2000);
  setTimeout(() => console.log("paso 3 segundos"), 3000);

  const numeros = [1, 2, 3];
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
  }

  numeros.map((numero) => console.log(numero * 2));

  //spread operator
  const numerosImpares = [1, 3, 5];
  const numerosPares = [2, 4, 6];
  //const resultado = [1,3,5,2,4,6]
  let resultado = [0, 0, 0, 0, 0, 0];
  /*  for(let i=0; i<numerosImpares.length;i++){
      for(let j=0; j<numerosPares.length;j++){
        if(numerosImpares.length - 1>i){
          resultado[i] = numerosImpares[i]
        }else if(numerosPares.length -1 > j){
          resultado[j] = numerosPares[j];
        }
      }
    } */

  resultado = [...numerosImpares, ...numerosPares];
  console.log(resultado);

  //spread operator con objetos

  const departamento = {
    piso: 3,
    numero: 123,
    banos: 2,
    dormitorios: 3,
  };
  const edificio = {
    direccion: "av siempre viva #333",
    ubicacion: { lat: 16.32423, lng: 65.42342 },
    parrilla: "si",
    terraza: "si",
  };

  const depedificio = { ...departamento, ...edificio };
  console.log(depedificio);

  //destructuring
  const cursoReactNative = {
    docente: "Ruddy",
    duracion: 22,
    requerimientos: ["js", "css", "react"],
    tecnologia: {
      nombre: "react",
      autor: "facebook",
      subtec: { nombre: "expo" },
    },
  };

  /*  console.log(
      "tecnologias:",
      cursoReactNative.tecnologias[0].nombre,
      cursoReactNative.tecnologias[1].nombre
    ); */
  //const subTec= cursoReactNative.tecnologia.subtec.nombre;
  const {
    tecnologia,
    autor,
    tecnologia: {
      subtec: { nombre },
    },
  } = cursoReactNative;
  console.log(tecnologia, autor, nombre);

  //template literals

  const pi = 3.1416;
  const areaRectangulo = "b*a";
  console.log(
    "el valor de pi es: " +
      pi +
      " y el area de un rectangulo es: " +
      areaRectangulo
  );
  console.log(
    `el valor de pi es: ${pi} y el area de un rectangulo es: ${areaRectangulo}`
  );
}

export default function App() {

  useEffect(()=>{
    //repasoes6()

  },[])

  const onPress = () =>{
    alert("presionaste el boton")
    //console.log("presionaste el boton");
  }

  return (
    <View style={styles.container}>
     
  
     {/*  <Calculadora/> */}
      {/* <CalculadoraV2/> */}
      {/* <CiclosDeVida/> */}
      {/* <TiposComida/> */}
      {/* <Users /> */}
      <Cursos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
