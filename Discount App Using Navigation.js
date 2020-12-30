// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react/cjs/react.development';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


const History=({navigation, route})=>{
    const r=route.params.list;
    const [getvalue, setvalue]=useState(r);
    const clear=()=>{

        setvalue([""]);
        
    }
    return(

        <View style={styles.container}>
            <View style={{flexDirection:"column", flex:1}}>
            <Text style={styles.HeadingStyle}> History</Text>
                <View style={{flexDirection:"row", flex:1}}>
                    <Text> Original Price   -   </Text>
                    <View style={{flexDirection:"column", flex:1}}>
                        <ScrollView style={{flexDirection:"column"}}>
                            {
                                getvalue.map((item)=>{
                                    return(
                                        <View style={{flexDirection:"column"}}>
                                            <Text>{item.originalprice}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <Text style={{marginLeft:15}}> Discount Price   -   </Text>
                    <View style={{flexDirection:"column", flex:1}}>
                        <ScrollView style={{flexDirection:"column"}}>
                            {
                                getvalue.map((item)=>{
                                    return(
                                        <View style={{flexDirection:"column"}}>
                                            <Text>{item.discountprice}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <Text> Final Price   -   </Text>
                    <View style={{flexDirection:"column"}}>
                        <ScrollView style={{flexDirection:"column"}}>
                            {
                                getvalue.map((item)=>{
                                    return(
                                        <View style={{flexDirection:"column"}}>
                                            <Text>{item.finalprice}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    
                </View>
                <View style={{marginBottom:430}}>
                <Button title="Clear" onPress={clear}></Button>
                </View>
                

            </View>
        </View>
    );

}
const HomeScreen=({navigation})=>{
    const[getprice, setprice]=useState("");
    const[getdiscountvalue, setdiscountvalue]=useState("");
    const[getfinalprice,setfinalprice]=useState("");

    const[getdatalist, setdatalist]=useState([]);
    const[gettext, settext]=useState("");


 
    const buttonaction=()=>{
        const a=(getprice/100)*getdiscountvalue;
        setfinalprice(getprice-a);

    }
    const HistorySave=()=>{
        const ui=getfinalprice;
        let temp=getdatalist;

        temp.push(   
            {
            key: Math.random.toString(),
            originalprice: getprice,
            discountprice: getdiscountvalue,
            finalprice: getfinalprice
        });

        setdatalist(temp);
        console.log(getdatalist.p)
        settext("Record Added")
           
    }
    
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.HeadingStyle}> Discount Calculator </Text>
          <TextInput
              placeholder="Enter Price Value" style={{borderWidth:2, borderColor:"red"}}
              onChangeText={text=>setprice(text)}
              > 
              </TextInput>
        <TextInput
              placeholder="Enter Discount Percentage" style={{borderWidth:2, borderColor:"red", marginTop:5}}
              onChangeText={text=>setdiscountvalue(text)}
              > 
              </TextInput>

              <View style={{flex:1, marginTop:5}}>
                  <Button title="Calculate" onPress={buttonaction}></Button>
                  <Text style={{textAlign:"center", fontSize:18, marginTop:5}}> Price Is {getfinalprice}</Text>           
        </View>
        <View style={{flex:1, marginTop:5}}>
                  <Button title="Svae To History" onPress={HistorySave}></Button>
                  <Text style={{fontSize:15, textAlign:"center"}}>{gettext}</Text>
                  
        </View>
        <View style={{flex:1, marginTop:5}}>
                  <Button title="Show History" onPress={()=>navigation.navigate('History',{list:getdatalist})}></Button>
        </View>
      </View>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containersecond:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:1
  },
  buttonstyle: {
    marginTop: 5,
  },
  HeadingStyle:{
    fontSize: 50,
    marginTop: 5,
    color: "Black",
    includeFontPadding: 5,
  }
})

export default App;