import { StyleSheet, Text, View } from 'react-native'
import { createContext, useState } from "react";


export const MyContext = createContext();
 
const ThemeProvider = ({children}) => {
    const [isDarkMode , setIsDarkMode] = useState(false);

    const toggleDarMode =()=>{
        setIsDarkMode(!isDarkMode)
      }

  return (
    <MyContext.Provider value={{toggleDarMode, isDarkMode}}>
        {children}
    </MyContext.Provider>
  )
}

export default ThemeProvider

