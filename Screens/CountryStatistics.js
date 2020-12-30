import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';


const CountryStatistics=()=>{

    const [Countries, setTotalCountries] = useState([]);

    useEffect(() => {
      const getToatalCountries = async () => {
        const datas = await fetch(
          'https://world-population.p.rapidapi.com/allcountriesname',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key':
                'df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233',
              'x-rapidapi-host': 'world-population.p.rapidapi.com',
            },
          }
        );
  
        const response = await datas.json();
        setTotalCountries(response.body.countries);
      };
      getToatalCountries();
    }, []);

    const selectedccountry=(props)=>{
        console.log(props.value);
        return(
            <View>Hy</View>
        )

    }
    return(
        <View>
          <ScrollView>
                {Countries.map((value, index) => {
                return (
                    <TouchableOpacity onPress={()=>{selectedccountry, value}}> {value} </TouchableOpacity>
                );
                })}
            </ScrollView> 
        </View>
    )

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
    scrollstyle:{
        justifyContent:"center",
        alignContent:"center",
        color:"blue"
    },
  
  
    
  }
  
  );
  export default CountryStatistics;