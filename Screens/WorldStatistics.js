import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



// const Drawer = createDrawerNavigator();
const url = 'https://covid-19-data.p.rapidapi.com/totals';

const WorldStatistics=()=>{
  const [getData,setData] = useState([]);
  const [population, setPopulation] = useState();
  
  useEffect(() => {

   const WorldData = async () => {
       const worldData = await fetch('https://covid-19-data.p.rapidapi.com/totals',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key':
                'df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            },
          }
        );
        const response = await worldData.json();
        console.log(response)
        setData(response);
      };

      const WorldPopulation = async () => {
        const worldPopulation = await fetch(
           "https://world-population.p.rapidapi.com/worldpopulation", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "578a301ae2msh4bac73eef36107ep1177a5jsn27c14c5ea2e4",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
         }
      })
        const response = await worldPopulation.json();
        // console.log(response.body.population)
        setPopulation(response.body.world_population);
      };
      WorldPopulation();
      WorldData();
    }, []);


return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.textstyle}> COVID-19</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white", fontSize:35, marginTop:10}}>Confirmed Cases</Text>
                <FlatList  data={getData} keyExtractor={({id}, index)=>id}
                 renderItem={({item}) =>(
                  <Text style={{color:"white", fontSize:35, marginTop:10, marginLeft:20}}>{item.recovered}</Text>

            )
            }/>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white", fontSize:35, marginTop:10}}>Recoverd</Text>
                <FlatList  data={getData} keyExtractor={({id}, index)=>id}
                 renderItem={({item}) =>(
                  <Text style={{color:"white", fontSize:35, marginTop:10, marginLeft:20}}>{item.confirmed}</Text>

            )
            }/>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white", fontSize:35, marginTop:10}}>Critical</Text>
                <FlatList  data={getData} keyExtractor={({id}, index)=>id}
                 renderItem={({item}) =>(
                  <Text style={{color:"white", fontSize:35, marginTop:10, marginLeft:20}}>{item.critical}</Text>

            )
            }/>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white", fontSize:35, marginTop:10}}>Death</Text>
                <FlatList  data={getData} keyExtractor={({id}, index)=>id}
                 renderItem={({item}) =>(
                  <Text style={{color:"white", fontSize:35, marginTop:10, marginLeft:20}}>{item.deaths}</Text>

            )
            }/>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white", fontSize:35, marginTop:10}}>Last Update</Text>
                <FlatList  data={getData} keyExtractor={({id}, index)=>id}
                 renderItem={({item}) =>(
                  <Text style={{color:"white", fontSize:35, marginTop:10, marginLeft:20}}>{item.lastUpdate}</Text>

            )
            }/>
                </View>
                <View>
                    <Text style={{color:"blue", fontSize:35, marginTop:10}}>Total Population {population}</Text>
                </View>
                </View>
            
        )
    
    }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        //   justifyContent: 'center',
          backgroundColor:"black",
          borderColor:"white",
          borderBottomColor:10,
        },
        textstyle:{
            alignContent:"center",
            justifyContent:"center",
            color:"white",
            fontSize:50
    
        },
      
        viewstyle: {
          flexDirection: "row"
        },
        viewstyle1:{
          marginTop: 10
        },
    })

// const styles = StyleSheet.create({
//    container:{
//       flex:2,
//       justifyContent:"center",
//       alignItems:"center",
//       marginTop:50
//    },
//    listSt:{
//       padding:5,
//       fontSize:15,
//       fontWeight:'bold'
//    }
// });

// const WorldStatistics=()=>{
//     const[getloading, setloading]=useState(true);
//     const[getDatasource, setDatasource]=useState([]);

//     const covidurl="https://reactnative.dev/movies.json";
    
//     useEffect(()=>{
//         fetch(covidurl).then((response)=>response.json.name)
//         .then((json)=>setDatasource(json.movies))
//         // .fnally(setloading(false));
//     },[]);

//     return(
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.textstyle}> COVID-19</Text>
//             </View>
//             <View style={{flexDirection:"row"}}>
//             <Text style={{color:"white", fontSize:35, marginTop:10}}>Confirmed Cases</Text>
            
          
//          {/* {
//                 getloading ? (
//                     <ActivityIndicator/>
//                 ) : (
//                     <FlatList
//                     data={getDatasource}
//                     keyExtractor={({id}, index)=>id}
//                     renderItem={({ item })=>(
//                         <Text>
//                             {item}
//                         </Text>
//                     )}
//                     />
//                 )
//             } */}
            
//             </View>
//             <View>
//             <FlatList
//                     data={getDatasource}
//                     keyExtractor={({id}, index)=>id}
//                     renderItem={({ item })=>(
//                         <Text>
//                             {item.title}
//                             {console.log(item.movies)}
//                         </Text>
//                     )}
//                     />
//             </View>
//         </View>
//     )

// }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//     //   justifyContent: 'center',
//       backgroundColor:"black",
//       borderColor:"white",
//       borderBottomColor:10,
//     },
//     textstyle:{
//         alignContent:"center",
//         justifyContent:"center",
//         color:"white",
//         fontSize:50

//     },
  
//     viewstyle: {
//       flexDirection: "row"
//     },
//     viewstyle1:{
//       marginTop: 10
//     },

  
  
    
//   }
  
//   );
  export default WorldStatistics;