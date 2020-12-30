import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



 export default function App() {
    const [getcheck, setcheck]= useState("0");

    const increment=(
        
            <View>
                <View style={styles.container}>
                    <Text> This is second screen</Text>
                    <Button title="Button"></Button>
                </View>
            </View>
        );        
        const decrement=()=>{
            return(
            <View>
                <View style={styles.container}>
                    <Text> This is third screen</Text>
                    <Button title="Button"></Button>
                </View>
            </View>
        );
        }        
    
    
     const game=()=>{
        if(getcheck=="0"){
            return increment;
        }
        

     }
     return(
         <View>
             {
                 game()
             }
         </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewstyle: {
    flexDirection: "row"
  },
  viewstyle1:{
    marginTop: 10
  },


  
}

);
 