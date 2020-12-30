import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity} from 'react-native';
// import FirstScreen from './ShowScreen1';
// import GameStart from './ShowScreen2';


 export default function App() {

const [getTextprice, setTextprice]=useState("");
const [getTextdiscount, setTextdiscount]=useState("");
const [getpricevalue, setpricevalue]=useState("");
const [getdiscountvalue, setdiscountvalue]=useState("");
const [getlistprice, setlistprice]=useState([""]);
const [getlistdiscount, setlistdiscount]=useState([""]);

const calculatefunction=()=>{

    setdiscountvalue((getTextprice/100)*getTextdiscount);
    setpricevalue(getTextprice);
    setlistdiscount([...getlistdiscount,
        {
            key:Math.random().toString(), data:getdiscountvalue
        }
    ])

    setlistprice([...getlistprice,
        {
            key:Math.random().toString(), data:getpricevalue
        }])

}

    
  return (
      <View>
          <View style={styles.container}>
              <Text style={{fontSize:40, color:"green"}}>Discount Calculator</Text>
          </View>
          <View style={styles.directionstyle}>
              <TextInput
              placeholder="Enter Price Value" style={{borderWidth:2, borderColor:"red"}}
              onChangeText={text=>setTextprice(text)}
              > 
              </TextInput>
          </View>

          <View style={styles.directionstyle}>
              <TextInput
              placeholder="Enter Discount Value" style={{borderWidth:2, borderColor:"red"}}
              onChangeText={text=>setTextdiscount(text)}
              > 
              </TextInput>
          </View>

          <View style={styles.directionstyle}>
              <Text> Price Is</Text>
              <Text> {getpricevalue}</Text>
          </View>

          <View style={styles.directionstyle}>
              <Text> Discount Price Is</Text>
              <Text> {getdiscountvalue}</Text>
          </View>
          
          <View style={styles.container}>
              {/* <TouchableOpacity
              onPress={calculatefunction}
              >
                  <Text style={{fontSize:15, backgroundColor:"green", color:"white"}}>Calculate</Text>
              </TouchableOpacity> */}
              <Button title="Calculate" onPress={calculatefunction}></Button>
          </View>

            

          <View style={styles.container}>
              <Text style={{fontSize:40, color:"green"}}>History</Text>
          </View>

          <View style={styles.directionstyle}>
              <View>
                  <Text style={{fontSize:20}}> Price Is</Text>
              <ScrollView style={{marginLeft:20}}>
                        { 
                         getlistprice.map((item)=>{
                             return(
                         <View>
                              <Text>{item.data}</Text>
                         </View>
                         )}
                         )   

                        }
                           
                    </ScrollView>
              </View>

              <View style={{marginLeft:20}}>
                  <Text style={{fontSize:20}}> Discount Price Is</Text>
              <ScrollView style={{marginLeft:20}}>
                        { 
                         getlistdiscount.map((item)=>{
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
      </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: 'center',
},
  directionstyle:{
      marginTop:10,
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
  }
  
}

);
