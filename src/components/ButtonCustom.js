import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StylesBase from "../styles/StylesBase";
const ButtonCustom = (props) => {
  const { textButton = "boton", onPress } = props;
  return (
    <TouchableOpacity style={StylesBase.appButtonContainer} onPress={onPress}>
      <Text style={StylesBase.appButtonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ButtonCustom;
