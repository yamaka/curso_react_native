import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Pantalla1 extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        console.log("constructor Pantalla1");
    }
    componentDidMount(){
        //llamar al servidor para traer los datos
        console.log("componentDidMount Pantalla1");
    }
    componentWillUnmount(){
        //descachear datos
        console.log("componentWillUnmount Pantalla1");
    }
    render() {
        return (
          <View>
            <Text> Pantalla1 </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({})
