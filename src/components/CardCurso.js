import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";


const CardCurso = ({
    id,
    titulo,
    imagen,
    descripcion,
    deleteCurso,
    editarCurso,
    toDetailScreen

}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toDetailScreen(id)}>
        <Text style={styles.textTitle}>{titulo}</Text>
        <Image
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
          source={{
            uri: imagen,
          }}
        />
      </TouchableOpacity>
      <View style={{ width: "100%" }}>
        <Text style={{ alignSelf: "center" }}>{descripcion}</Text>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            onPress={() => editarCurso(id)}
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#0000EE" }}>Editar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => deleteCurso(id)}
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#0000EE" }}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardCurso

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeeeee",
    padding: 5,
    alignItems: "center",
    width: "95%",
    
    margin: 10
  },
  textTitle:{
      fontSize: 24,
      fontWeight: '500',
      color: "#40414e",

  }
});