import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './screen/Splash'
import Table from './screen/Table';
import Search from './components/Search';
import ThemeProvider from './contex/ThemeProvider';
const Stack = createNativeStackNavigator()

const App = () => {
  return (

       <ThemeProvider>
    <NavigationContainer >
       <Stack.Navigator  >
        <Stack.Screen name='splash' component={Splash}  options={{headerShown:false}} />
        <Stack.Screen name='table' component={Table}  options={{headerShown:false}}  />
        <Stack.Screen name='search' component={Search}  options={{headerShown:true}}  />
       </Stack.Navigator>
     </NavigationContainer>
    </ThemeProvider>
   
  )
}

export default App

const styles = StyleSheet.create({})