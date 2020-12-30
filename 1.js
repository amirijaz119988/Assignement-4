import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const GameStart=(props)=>{
    props.p1("20");
    return(
    <View>
        <Text>
            {props.p2}
        </Text>
    </View>
    );
    
    
}