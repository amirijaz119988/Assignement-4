import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from "react-native";

const App = () => {
    const [getlistshow, setlistshow]=useState([""]);
    const [getvaluefirst, setvaluefirst]=useState("");
    const [getvaluelast, setvaluelast]=useState("");

    const performaction=()=>{
        setlistshow([...getlistshow,
            {
                key:Math.random().toString(), data:getvaluefirst+getvaluelast
            }
        ])

    }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 100 }}
        placeholder="First Name"
        onChangeText={(text)=>setvaluefirst(text)}
      />
      <TextInput
        style={{ width: 100 }}
        placeholder="Last Name"
        onChangeText={(text)=>setvaluelast(text)}
      />
      <Button title="Add"  onPress={performaction}/>
      <View>
            <Text style={{fontSize:20}}> Display List Of Users</Text>
              <ScrollView style={{marginLeft:20}}>
                        { 
                         getlistshow.map((item)=>{
                             return(
                         <View>
                              <Text>{item.data}</Text>
                         </View>
                         )}
                         )   

                        }
                           
                    </ScrollView>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;