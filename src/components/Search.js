import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import details from '../utis.js/constant';
import { DataTable } from 'react-native-paper';
import { MyContext } from '../contex/ThemeProvider';
import Icon from 'react-native-vector-icons/Ionicons'



const Search = ({searchItemHandler}) => {

    const [search , setsearch] =   useState("")
    const [data , setdata] =   useState(details)
    const {isDarkMode ,toggleDarMode} =  useContext(MyContext)

    const onchangeTxtHandler =(query)=>{
        setsearch(query)
   }

//    console.log(search)


   const searchHandler = data.filter((item) =>
   item.firstName.toLowerCase().includes(search.toLowerCase())
 );



  return (

    <ScrollView>   
    <View style={[styles.main_container, isDarkMode ? styles.darkmode : styles.lightmode]} >  
    <View style={[styles.search_container, isDarkMode ? styles.darkmode : styles.lightmode]} >
     <TextInput style={[styles.searchinput , isDarkMode ? styles.lightmode : ""]}
      placeholderTextColor={"black"}
      value={search}
        onChangeText={(e)=>{onchangeTxtHandler(e)}}
        
       textAlign='center' placeholder='search for name' />
       <View style={{flexDirection:"row"}} >

               <Pressable onPress={toggleDarMode} style={{marginLeft:10}} >
               <Icon name={isDarkMode? "sunny-outline" : "moon"} size={30} color={isDarkMode ? "white" :"black"} />
               </Pressable>
               </View>
    </View>


    <DataTable>
    <  DataTable.Header  >
        <DataTable.Title > <Text style={[isDarkMode ? styles.lightxt : styles.darktxt, styles.headertx]} >First Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={[isDarkMode ? styles.lightxt : styles.darktxt, styles.headertx]}>Last Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={[isDarkMode ? styles.lightxt : styles.darktxt, styles.headertx]} >Department Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={[isDarkMode ? styles.lightxt : styles.darktxt, styles.headertx]}>Salary Name</Text></DataTable.Title>
      </DataTable.Header>
    </DataTable>

     { searchHandler &&  searchHandler.slice(0,20).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.firstName}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.lastName}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.department}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} > Rs {item.salary}</Text></DataTable.Cell>
    
        </DataTable.Row>
      ))}
         </View>   
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({

    main_container:{
        width:'100%',
        backgroundColor:"white",
    },
    search_container:{
        width:"90%",
        marginTop:10,
        paddingVertical:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:20,
        flexDirection:"row",
        backgroundColor:"green"
    },

    container:{
        width:"100%",
        backgroundColor:"black",
        paddingVertical:20,
       justifyContent:"space-between",
       flexDirection:"row",
       paddingHorizontal:15
    },

    searchinput:{
        width:"70%",
        borderColor:"black",
        borderWidth:1,
         borderRadius:40,
         fontSize:20,
         color:"black"
       
    },
    lightmode:{
        backgroundColor:"#FFFFFF"
    },
    darkmode :{
        backgroundColor:"black"
    },

    darktxt:{
        color:"black",
        fontWeight:"bold",
        fontSize:17,
        
    },
    lightxt:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },
    headertx:{
        color:"red",
        fontSize:15
    }
    
})