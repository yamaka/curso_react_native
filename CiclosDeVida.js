import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Pantalla1 from './Pantalla1'
import Pantalla2 from "./Pantalla2";
import Pantalla1Hook from "./Pantalla1Hook";
import Pantalla2Hook from "./Pantalla2Hook";
import ButtonCustom from "./src/components/ButtonCustom";


export default class CiclosDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantalla1: true,
    };
    //console.log("constructor");
  }
  componentDidMount() {
    //hacer peticiones al servidor
    //alert("componentDidMount");
  }
  cambiarPantalla = () =>{
    this.setState({
        pantalla1: !this.state.pantalla1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Ciclos de Vida </Text>
        {this.state.pantalla1 ? <Pantalla1Hook /> : <Pantalla2Hook />}
        <ButtonCustom textButton="siguiente" 
        onPress={() => this.cambiarPantalla()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
