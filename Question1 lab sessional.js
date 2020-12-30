import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button,} from "react-native";

const App = () => {

    const [getvalue, setvalue]= useState("");
    const [geterrorvalue, seterrorvalue]=useState("");
    const [getcon, setcon]=useState("1");




    const checkvaluekey = keyPress => {
        if(keyPress.nativeEvent.key>0){
            if(getcon<5){
                setcon(getcon+1);
            }
            else{
                seterrorvalue("More than two positive integer");
            }
            
        }
    

    };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textfiled}
        placeholder="Hello from Text Input"
        keyboardType="numeric"
        onChangeText={(text)=>setvalue(text)
        }
        onKeyPress={checkvaluekey}

      />
        <Text>{geterrorvalue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textfiled: {
      borderWidth: 2,
      borderColor: "green",
      width: 100
  }
})

export default App;