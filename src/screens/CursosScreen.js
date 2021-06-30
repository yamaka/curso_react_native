import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button
} from "react-native";

import CardCurso from "../components/CardCurso";
import FormCurso from "../components/FormCurso";

const CursosScreen = ({navigation}) => {
  const [cursos, setCursos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [titleForm, setTitleForm] = useState("Agregar Curso");
  const [textSubmitFormButton, setTextSubmitFormButton] = useState("Agregar");
  const [idCursoEdit, setIdCursoEdit] = useState(null);

  const [formCurso, setFormCurso] = useState({
    titulo: "",
    desc: "",
    imagen: "",
  });

  useEffect(() => {
    getCursos();
  }, []);

  const getCursos = () => {
    axios.get("http://192.168.0.3:8080/api/cursos").then((response) => {
      console.log("cursos", response.data);
      setCursos(response.data);
    });
  };

  const deleteCurso = (idCurso) => {
    axios
      .delete(`http://192.168.0.3:8080/api/cursos/${idCurso}`)
      .then((response) => {
        getCursos();
      });
  };

  const editarCurso = (idCurso) => {
    setTitleForm("Editar Curso");
    setTextSubmitFormButton("Actualizar");
    const curso = cursos.find((curso) => curso.id == idCurso);
    if (curso) {
      const nuevoValor = {
        titulo: curso.titulo,
        desc: curso.descripcion,
        imagen: curso.imagen,
      };

      setFormCurso({ ...formCurso, ...nuevoValor });
      setIdCursoEdit(idCurso);
    }
    setShowForm(true);
  };

  const toDetailScreen = (idCurso) => {
    navigation.navigate("Curso",{
      idCurso: idCurso
    });
  };

  const renderCursos = () => {
    return (
      <>
        {cursos.map((curso) => (
          <CardCurso
            key={curso.id}
            {...curso}
            deleteCurso={deleteCurso}
            editarCurso={editarCurso}
            toDetailScreen={toDetailScreen}
          />
        ))}
      </>
    );
  };

  const resetForm = () => {
    setFormCurso({
      titulo: "",
      desc: "",
      imagen: "",
    });
    setTitleForm("Agregar Curso");
    setTextSubmitFormButton("Agregar");
  };

  const addCurso = () => {
    console.log("addCurso");
    resetForm();
    setShowForm(!showForm);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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

        {!showForm ? (
          renderCursos()
        ) : (
          <FormCurso
            setShowForm={setShowForm}
            getCursos={getCursos}
            titleForm={titleForm}
            textSubmitFormButton={textSubmitFormButton}
            curso={formCurso}
            idCursoEdit={idCursoEdit}
          />
        )}

        <Button
          title="Ir a Curso"
          onPress={() => navigation.navigate("Curso")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CursosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
