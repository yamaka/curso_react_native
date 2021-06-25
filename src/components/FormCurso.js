import axios from 'axios';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const FormCurso = ({
    setShowForm,
    getCursos
}) => {

    const [formCurso, setFormCurso] = useState({
        titulo:"",
        desc: "",
        imagen:"",
    });

    const onChangeInput  = (valor, key) =>{
        console.log("onChangeInput", valor , key);
        const nuevoValor = {
            [key]: valor
        };
        setFormCurso({...formCurso, ...nuevoValor})
        //que esta pasando de fondo
        //const form = {titulo: "react native", desc: " creado por facebook", imagen:"", }
    }

    const addCurso = () =>{
        const {titulo, desc, imagen} = formCurso
        const params = {
          titulo: titulo,
          descripcion: desc,
          imagen: imagen,
        };
        axios.post("http://localhost:8080/api/cursos", params)
        .then(response =>{
            setShowForm(false);
            getCursos();
        });

    }

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Crear Curso</Text>

        <TextInput
          style={styles.input}
          value={formCurso.titulo}
          onChangeText={ valor => onChangeInput(valor, "titulo")}
          placeholder={"Titulo"}
        />
        <TextInput
          style={styles.input}
          value={formCurso.desc}
          onChangeText={ valor => onChangeInput(valor, "desc")}
          placeholder={"Descripccion"}
        />
        <TextInput
          style={styles.input}
          value={formCurso.imagen}
          onChangeText={ valor => onChangeInput(valor, "imagen")}
          placeholder={"Imagen"}
        />

        <TouchableOpacity style={styles.button} onPress={() => addCurso()}>
          <Text style={styles.textButton}>Agregar</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FormCurso

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle:{
        fontSize:24,
        fontWeight: 'bold'
    },
  input: {
    borderColor: "black",
   
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 42,
    width: "90%",
    margin: 12,
    fontSize: 16,
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "90%",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
});
