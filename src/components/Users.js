import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
//llamadas a un servidor
const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
   /*  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("respuesta: ", jsonData);
        setUsuarios(jsonData);
      }).catch(error => console.error("error", error)); */

      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
          console.log("respuesta con axios:", response.data);
          setUsuarios(response.data);
      });
  };

  const renderUsuarios = () => {
      if(usuarios.length == 0 ){
        return <Text>Cargando...</Text>
      }
    return (
      <View>
        {usuarios.map((usuario) => (
          <Text key={usuario.id}>{usuario.username}</Text>
        ))}
      </View>
    );
  };

  return (
    <View>
      <Text>Lista de Usuarios</Text>
      
      {renderUsuarios()}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
