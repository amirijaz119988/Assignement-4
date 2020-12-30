// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen=({navigation})=>{
  return (
    <View style={styles.container}>
      <View>
        <Text>Time To Check</Text>
        <Button title ="Manage Products" style={styles.buttonstyle}
        onPress={()=>navigation.navigate('Product List')}>
        </Button>

        <Button title ="Manage Employess" style={styles.buttonstyle}
        onPress={()=>navigation.navigate('Employee')}></Button>
        <Button title ="Manage Orders" style={styles.buttonstyle}
        onPress={()=>navigation.navigate('Order Screen')}></Button>

      </View>
    </View>
  );
}



const productData=({navigation, route})=>{
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.HeadingStyle}> Products Description</Text>
        <Text>{route.params.des}</Text>
      </View>
    </View>    
  )

}

const ProductList =({navigation})=>{
  const[getproductlist, setproductlist]=useState([
    {
      key:"p1",
      data:["Xbox","50k"],
      detail:"This Is Brand New Microsft XBOX"
    },
    {
      key:"p2",
      data:["PS4","60k"],
      detail:"This Is Brand New Sony PS4"
    }
  ]
  );
 

  return(
  <View  style={styles.container}>
    <View style={styles.containersecond}>
      <Text style={styles.HeadingStyle}> List Of Products </Text>
      <View>
        <ScrollView>
          {
            getproductlist.map((item)=>{
              const des=item.detail;
              return(
                
                <View>
                     <TouchableOpacity onPress={()=>navigation.navigate('Product Data',{des})}>

                       <Text style={{fontSize:16, marginLeft:10, color:"green"}}>{item.data}</Text>
                    </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
      </View>

    </View>

  </View>
  );
}

const Employee=({navigation})=>{
  const[getemployeelist, setemployeelist]=useState([
    {
      key:"p1",
      data:["Amir"," Incharge"],
      detail:"Incharge Of department of ELectrical Engineering"
    },
    {
      key:"p2",
      data:["Ali"," HOD"],
      detail:"HOD Of department of ELectrical Engineering"
    }
  ]
  );

  
  return(
    <View  style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.HeadingStyle}> Manage Employee </Text>
        <View>
          <ScrollView>
            {
              getemployeelist.map((item)=>{
                const edetail=item.detail;
                return(
                  
                  <View>
                       <TouchableOpacity onPress={()=>navigation.navigate('Employee Detail',{edetail})}>
  
                         <Text style={{fontSize:16, marginLeft:10, color:"green"}}>{item.data}</Text>
                      </TouchableOpacity>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
  
      </View>
  
    </View>
    );


}

const EmployeeDetails=({navigation, route})=>{
  return(
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.HeadingStyle}> Employee Detail</Text>
      <Text>{route.params.edetail}</Text>
    </View>
  </View>    
  );
}

const OrderScreen=({navigation})=>{
  const[getorderlist, seteorderlist]=useState([
    {
      key:"p1",
      data:["Order No 1 "," Xbox "," 50k "],
      detail:["Customer Name: Huzaifa"," Status: Shipped", " Order Date: 01-01-2012"]
    },
    {
      key:"p2",
      data:["Order No 2 "," PS4 "," 60k "],
      detail:["Customer Name: Umair"," Status: Shipped", " Order Date: 02-01-2012"]
    }
  ]
  );

  
  return(
    <View  style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.HeadingStyle}> Manage Orders </Text>
        <View>
          <ScrollView>
            {
              getorderlist.map((item)=>{
                const odetail=item.detail;
                return(
                  
                  <View>
                       <TouchableOpacity onPress={()=>navigation.navigate('Order Detail',{odetail})}>
  
                         <Text style={{fontSize:16, marginLeft:10, color:"green"}}>{item.data}</Text>
                      </TouchableOpacity>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
  
      </View>
  
    </View>
    );

}
const OrderDetails=({navigation, route})=>{
  return(
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.HeadingStyle}> Order Detail</Text>
      <Text>{route.params.odetail}</Text>
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
        <Stack.Screen name ="Product List" component={ProductList} />
        <Stack.Screen name ="Product Data" component={productData} />
        <Stack.Screen name ="Employee" component={Employee} />
        <Stack.Screen name ="Employee Detail" component={EmployeeDetails} />
        <Stack.Screen name ="Order Screen" component={OrderScreen} />
        <Stack.Screen name ="Order Detail" component={OrderDetails} />

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