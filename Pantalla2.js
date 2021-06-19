import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Pantalla2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor Pantalla2");
  }
  componentDidMount() {
    console.log("componentDidMount Pantalla2");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount Pantalla2");
  }
  render() {
    return (
      <View>
        <Text> Pantalla2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
