import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'

const CursoDetailScreen = ({route, navigation}) => {
    const {idCurso} = route.params;

    const [curso, setCurso] = useState(null)
    
    useEffect(() =>{
        getCurso()
    },[])

    const getCurso = () =>{
        axios.get(`http://192.168.0.3:8080/api/cursos/${idCurso}`)
        .then(response => {
            setCurso(response.data);
        });
    }

    if(!curso){
        return (
          <View style={[styles.container, {alignItems:"center"}]}>
            <Text >Cargando...</Text>
          </View>
        );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{curso ? curso.titulo : ""}</Text>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={{
            uri: curso.imagen,
          }}
        />

        <Text style={{ alignSelf: "center" }}>{curso.descripcion}</Text>
      </View>
    );
}

export default CursoDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
