import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";

//context
import CartContext from "../context/CartContext";


const CartBarAction = ({color,size}) => {
    const [cartStateContext, setCartStateContext] = useContext(CartContext);
    const { cursos } = cartStateContext;
    return (
      <View style={styles.container}>
          <Text style={styles.counter}>{cursos.length}</Text>
        <FontAwesome
          name="shopping-cart"
          color={"#000"}
            size={30}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            marginLeft: 15,
            justifyContent:"center",
            alignItems:"center"
          }}
        />
      </View>
    );
}

export default CartBarAction

const styles = StyleSheet.create({
    container:{
        justifyContent:"center"
    },
    counter:{
        position:"absolute",
        zIndex: 10,
        right: 10,
        top: 10,
        padding: 6,
        backgroundColor:"#ff0000",
        color:"#fff",
        fontSize: 10,
        borderRadius: 10,


    }
})
