import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FirstScreen=(props)=>{
  return(
  <View style={styles.container}>
    <Text>Welcome To Guess Game</Text>
    <Text>{props.p2}</Text>
    <Button title="Start Game" onPress={props.p1}></Button>
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
 
export default FirstScreen;
