import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// const Finish=(props)=>{
//     props.setcheckvalue("3");
    

// }

const GameStart=(props)=>{
    return(
    <View style={styles.container}>
    <View>
      <Text style={{fontSize: 20, marginBottom: 10}}>Guess Game Let Start</Text>
    </View>

    <View>
    <Text style={{fontSize: 20, marginBottom: 10}}>{props.p1}</Text>
    </View>
     
    <View style={styles.viewstyle}> 
      <Button title="1" onPress={props.p3.bind(this, 1)}>1</Button>
      <Button title="2" onPress={props.p3.bind(this, 2)}>2</Button>
      <Button title="3" onPress={props.p3.bind(this, 3)}>3</Button>
    </View>

    <View style={styles.viewstyle}> 
      <Button title="4" onPress={props.p3.bind(this, 4)}>4</Button>
      <Button title="5" onPress={props.p3.bind(this, 5)}>5</Button>
      <Button title="6" onPress={props.p3.bind(this, 6)}>6</Button> 
    </View>
   
    <View style={styles.viewstyle}> 
      <Button title="7" onPress={props.p3.bind(this, 7)}>7</Button>
      <Button title="8" onPress={props.p3.bind(this, 8)}>8</Button>
      <Button title="9" onPress={props.p3.bind(this, 9)}>9</Button>
    </View>

    <View style={styles.viewstyle}>
    <Button title="Guess" onPress={props.p5}></Button>
    <Button title="Clear" onPress={props.clear}></Button>
    </View>

     <View style={styles.viewstyle}>
    <Button title="Finish" onPress={props.p7.bind(this,5)}></Button>
    </View> 

    <View style={styles.container}>
        <Text>Your Score {props.p6}</Text>
    </View>

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
  export default GameStart;