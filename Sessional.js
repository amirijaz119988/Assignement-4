import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
const [getInc, setInc]= useState("");
const [getDec, setDec]=useState("");
const [getCount, setCount] = useState("");
    return(
        <View style={styles.container}>
            <View>
                <Text>
                    Counter Value {getCount}
                </Text>
            </View>
            <View>
                <Button title="Increment" onPress={increement(p2={setCount}, p1={getCount})}></Button>
                <Button title="Decrement" onPress={Decrement(p2={setCount}, p1={getCount})}></Button>
            </View>
            
        </View>

    );
}

const increement=(props)=>{
    {
        props.p1(props.p1+1)
    }

}

const Decrement=(props)=>{
    {
    props.p2(props.p1-1)
    }

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
   