import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width , height} =  Dimensions.get("window")
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container :{
        width:"100%",
        backgroundColor:"black",
        paddingVertical:20,

    },
    text:{
        color:"white",
        fontSize:25,
        paddingLeft:10,
        fontWeight:"bold"
    }
})