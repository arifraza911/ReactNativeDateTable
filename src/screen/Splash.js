import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

   const naviagtion = useNavigation()

   useEffect(() => {
       setTimeout(() => {
           naviagtion.navigate("table")
       }, 300);
   }, []);
  return (
    <View style={styles.container}>
       <Text style={styles.txt}>
        Welcome
       </Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  },

  txt :{
    color:"black",
    fontSize:30
  }
})