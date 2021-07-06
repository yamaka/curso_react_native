import React, {useContext, useState, useEffect} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

//context
import CartContext from "../context/CartContext";

const CardCurso = ({
    curso,
    id,
    titulo,
    imagen,
    descripcion,
    deleteCurso,
    editarCurso,
    toDetailScreen

}) => {

  const [cartStateContext, setCartStateContext, addToCart] = useContext(CartContext);
  const [showButtonCart, setShowButtonCart] = useState(true)

  useEffect(() => {
    if(verifyIfInCart(id)){
      setShowButtonCart(false)
    }else{
      setShowButtonCart(true);
    };

  }, [cartStateContext]);


  const verifyIfInCart = (idCurso) =>{
    let result = false;
    const {cursos} = cartStateContext;
    const cursoFiltro = cursos.find(c => c.id == idCurso)
    if (cursoFiltro) {
      result = true
    }
    return result;
  }

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
        {/* <View
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
        </View> */}

        {showButtonCart && (
          <View
            style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => addToCart(curso)}
              style={{
                width: "70%",
                backgroundColor: "#ff0000",
                borderRadius: 10,
                alignItems: "center",
                paddingVertical: 7,
              }}
            >
              <Text style={{ color: "#fff" }}>Carrito</Text>
            </TouchableOpacity>
          </View>
        )}
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