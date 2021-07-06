import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//context
import UserContext from "../context/UserContext"

const InfoUserData = () => {
    const [ userStateContext, setUserStateContext ] = useContext(UserContext);

    console.log("UserCOntext", userStateContext);
    const {username, email} = userStateContext;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
          source={{
            uri: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
          }}
        />
        <View style={styles.labelText}>
          <Text>Usuario: </Text>
          <Text> {username}</Text>
        </View>
        <View style={styles.labelText}>
          <Text>Email: </Text>
          <Text> {email}</Text>
        </View>
      </View>
    );
}

export default InfoUserData

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "space-around",
  },
  labelText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
});
