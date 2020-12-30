// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WorldStatistics from "./Screens/WorldStatistics";
import CountryStatistics from "./Screens/CountryStatistics";
import FavouriteCounries from "./Screens/FavouriteCountries";
import { Fontisto } from '@expo/vector-icons'; 



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabOne() {
  return (
    <Tab.Navigator initialRouteName={WorldStatistics}>
      <Tab.Screen name="World Statistics" component={WorldStatistics} 
       options={{
        tabBarIcon:()=> <Ionicons name="ios-home" size={20} color="white" />
      }}
      />
      <Tab.Screen name="Country Statistics" component={CountryStatistics} 
       options={{
        tabBarIcon:()=> <Fontisto name="world" size={20} color="white" />
      }}
      />
      <Tab.Screen name="Favourite Counries" component={FavouriteCounries} 
        options={{
            tabBarIcon:()=> <MaterialIcons name="favorite" size={24} color="white" />
          }}
      />
    </Tab.Navigator>
  );
}

function MyTabTwo() {
    return (
      <Tab.Navigator>

        <Tab.Screen name="Country Statistics" component={CountryStatistics} 
         options={{
          tabBarIcon:()=> <Fontisto name="world" size={20} color="white" />
        }}
        />
        <Tab.Screen name="World Statistics" component={WorldStatistics} 
         options={{
          tabBarIcon:()=> <Ionicons name="ios-home" size={20} color="white" />
        }}
        />
        <Tab.Screen name="Favourite Counries" component={FavouriteCounries} 
          options={{
              tabBarIcon:()=> <MaterialIcons name="favorite" size={24} color="white" />
            }}
        />
      </Tab.Navigator>
    );
  }
  


function MyDrawer() {
  return (
      <Drawer.Navigator
      screenOptions={{
          headerShown:true
      }}
      >
        
        <Drawer.Screen name="World Statistics" component={MyTabOne} 
        options={{
          drawerIcon:()=> <Ionicons name="ios-home" size={24} color="black" />
        }}
        />
        <Drawer.Screen name="Country Statistics" component={MyTabTwo}
         options={{
            drawerIcon:()=> <Fontisto name="world" size={24} color="black" />
          }}
        />
        <Drawer.Screen name="Favourite Countries" component={StackNavigator}
         options={{
            drawerIcon:()=><MaterialIcons name="favorite" size={24} color="black" />
          }}
        />
        
      </Drawer.Navigator>
   
  );
}


const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName={"Favorite Countries"}
        screenOptions={({navigation})=>({
           headerTintColor:"red",
           headerShown:false,
        //    headerLeft: ()=><Button title="Check" onPress={()=>navigation.openDrawer()}></Button>
        }
        )}
        >
        <Stack.Screen name="Favorite Countries" component={FavouriteCounries} />    
        <Stack.Screen name="World Statistics" component={WorldStatistics} />
        <Stack.Screen name="Country Statistics" component={CountryStatistics} />

      

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