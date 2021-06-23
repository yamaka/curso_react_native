import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TiposComida() {
    const frutas = ['Manzana', 'Platano', 'Pera', 'Durazno', 'Piña'];
    const verduras = ['Zanahoria', 'Arbeja', 'Brocoli'];
    const renderFrutas = () => {
        return (
          <View>
            {frutas.map((fruta, index) => (
              <Text key={index}>{fruta}</Text>
            ))}
          </View>
        );
    }
     const renderVerduras = () => {
       return (
         <View>
           {verduras.map((verdura, index) => (
             <Text key={index}>{verdura}</Text>
           ))}
         </View>
       );
     };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tipos de Comida</Text>
        <View>
          <Text style={styles.titleComida}>Frutas</Text>          
            {renderFrutas()}
        </View>
        <View>
          <Text style={styles.titleComida}>Verduras</Text>
          {renderVerduras()}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  titleComida: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
