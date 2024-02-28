import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import details from '../utis.js/constant';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { MyContext } from '../contex/ThemeProvider';

const Table = () => {
    const [page, setpage] = useState(1);
    const [data, setdata] = useState(details);
    const {navigate} = useNavigation()
    const {isDarkMode ,toggleDarMode} =  useContext(MyContext)
    


       const selectPageHandler=(i)=>{
           if(i>=1 && i<=data.length/10 && i!==page)
           setpage(i)
       }

     

   return (
    <SafeAreaView>

      <ScrollView  >
        <View style={ isDarkMode ? styles.darkmode : styles.lightmode} >
          <View style={[styles.container, isDarkMode ? styles.darkheader : styles.lightHeader]}>
            <Text style={[styles.text ,  ]} >Table App</Text>

               <View style={{flexDirection:"row"}} >
               <TouchableOpacity onPress={()=>{navigate("search")}} >
                <Icon name="search" size={35} color={"white"}  />
               </TouchableOpacity>

               <Pressable onPress={toggleDarMode} style={{marginLeft:10}} >
               <Icon name={isDarkMode? "sunny-outline" : "moon"} size={30} color={"white"} />
               </Pressable>
               </View>
          </View>
       
   
   
       {/* data table start from here */}
        <DataTable>
         <DataTable.Header  >
        <DataTable.Title > <Text style={isDarkMode ? styles.lightxt : styles.darktxt} >First Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={isDarkMode ? styles.lightxt : styles.darktxt} >Last Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={isDarkMode ? styles.lightxt : styles.darktxt} >Department Name</Text></DataTable.Title>
        <DataTable.Title > <Text style={isDarkMode ? styles.lightxt : styles.darktxt} >Salary Name</Text></DataTable.Title>
      </DataTable.Header>
      
       {details.slice(page*10-10 , page*15).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.firstName}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.lastName}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} >{item.department}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={isDarkMode ? styles.lightxt : styles.darktxt} > Rs {item.salary}</Text></DataTable.Cell>
    
        </DataTable.Row>
      ))}
       </DataTable>
       


    {/* pagination section starts from here */}
       <View>
        {details.length > 0 ? <View style={styles.pagination} >
              <TouchableOpacity onPress={()=>{selectPageHandler(page-1)}} >
                <Icon name="chevron-back-circle" color={isDarkMode ? "white" :"black"} size={30} />
              </TouchableOpacity>

            {[...Array(data.length/10)].map((_,i)=>{
                return (
                    <TouchableOpacity key={i} onPress={()=>{selectPageHandler(i+1)}} style={[styles.pagination_btn , page===i+1 ? styles.active : ""]} >
                        <Text style={[styles.pagination_btntext , isDarkMode ? styles.lightxt : styles.darktxt]} >{i+1}</Text>
                    </TouchableOpacity>
                 )
            })}
              <TouchableOpacity onPress={()=>{selectPageHandler(page+1)}}>
              <Icon name="chevron-forward-circle" color={isDarkMode ? "white" :"black"} size={30} />
              </TouchableOpacity>
                
        </View>: ""}
       </View>
       </View>
    </ScrollView>
    </SafeAreaView>
  )

}

export default Table

const styles = StyleSheet.create({
    container :{
        width:"100%",
        backgroundColor:"black",
        paddingVertical:20,
       justifyContent:"space-between",
       flexDirection:"row",
       paddingHorizontal:15
    },
    text:{
        color:"white",
        fontSize:25,
        paddingLeft:10,
        fontWeight:"bold"
    },

   
    lightmode:{
        backgroundColor:"white"
    },
    darkmode :{
        backgroundColor:"black"
    },

    darktxt:{
        color:"black",
        fontWeight:"bold",
        fontSize:15
    },
    lightxt:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },
    pagination:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        padding:15,
      
    },
   
    pagination_btntext:{
        fontSize:20,
        fontWeight:"bold"
    },
    active :{
        backgroundColor:"#DDDCDD",
        padding:10,
        borderRadius:10
    },
    darkheader:{
        backgroundColor:"black",
        borderBottomColor:"white",
        borderBottomWidth:1
    }
    
})