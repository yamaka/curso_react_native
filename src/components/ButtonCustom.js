import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
const ButtonCustom = (props) =>{
    const {
    textButton="boton",
    onPress
} = props;
    return (
        <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={onPress}
        >

            <Text style={styles.appButtonText}>{textButton}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 60,
    height:60,
    justifyContent:"center"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
   
  }

})
export default ButtonCustom;