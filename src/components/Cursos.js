import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

import CardCurso from "./CardCurso";
import FormCurso from "./FormCurso";


const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
        getCursos();
    },[]);

    const getCursos = () =>{
        axios.get("http://localhost:8080/api/cursos")
        .then(response => {
            console.log("cursos", response.data);
            setCursos(response.data);
        })
    }

    const deleteCurso = (idCurso) =>{
        axios.delete(`http://localhost:8080/api/cursos/${idCurso}`)
        .then(response => {
            getCursos();
        });
    }

    const renderCursos = () => {
        return <>
            {cursos.map(curso => <CardCurso key={curso.id} {...curso} deleteCurso={deleteCurso}/>)}
        </>
    }

    const addCurso = () =>{
        console.log("addCurso");
        setShowForm(!showForm);
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={[styles.textTitle, { textAlign: "center" }]}>
            Cursos
          </Text>
          <TouchableOpacity onPress={() => addCurso()}>
            <Text style={[styles.textTitle, { textAlign: "right" }]}> + </Text>
          </TouchableOpacity>
        </View>


        {!showForm?renderCursos(): <FormCurso setShowForm={setShowForm} getCursos={getCursos}/>}

      </View>
    );
}

export default Cursos

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        padding: 5
    },
    textTitle:{
        fontSize:32,
        fontWeight: 'bold'
    }

})
