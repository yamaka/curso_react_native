import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Pantall2Hook() {
     useEffect(() => {
       console.log("component did mount Pantall2Hook");
     }, []);
  return (
    <View>
      <Text>Pantall2Hook</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
