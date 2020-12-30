// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { useState } from 'react/cjs/react.development';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabOne() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{
        tabBarIcon:()=> <Ionicons name="ios-home" size={20} color="white" />
      }}
      />
      <Tab.Screen name="Second Screen" component={Mydrawerscreen2} />
    </Tab.Navigator>
  );
}
const Mydrawerscreen=()=>{
    return(
        <View>
            <Text>Hello this is first Screen</Text>
        </View>
    )

}

const Mydrawerscreen2=()=>{
    return(
        <View>
            <Text>Screen 2</Text>
        </View>
    )

}
function MyDrawer() {
  return (
      <Drawer.Navigator
      screenOptions={{
          headerShown:true
      }}
      >
        
        <Drawer.Screen name="Home" component={StackNavigator} 
        options={{
          drawerIcon:()=> <Ionicons name="ios-home" size={24} color="black" />
        }}
        />
        <Drawer.Screen name="Second Screen" component={MyTabOne} 
        options={{
            headerShown:true
        }

        }
        />
        
      </Drawer.Navigator>
   
  );
}


const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName={"Home"}
        screenOptions={({navigation})=>({
           headerTintColor:"red",
           headerShown:false,
        //    headerLeft: ()=><Button title="Check" onPress={()=>navigation.openDrawer()}></Button>
        }
        )}
        >
        <Stack.Screen name="Home" component={Mydrawerscreen} />
        <Stack.Screen name="Second Screen" component={Mydrawerscreen2} 
        />

      </Stack.Navigator>

    );
}
function App() {
  return (
    <NavigationContainer theme={MyTheme}>
        <MyDrawer/>
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default App;