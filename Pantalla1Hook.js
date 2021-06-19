import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Pantalla1Hook() {
    useEffect(()=>{
      console.log("component did mount Pantalla1Hook");
    },[])
    return (
      <View>
        <Text>Pantalla1Hook</Text>
      </View>
    );
}

const styles = StyleSheet.create({})
