import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FirstScreen from './ShowScreen1';
import GameStart from './ShowScreen2';


var ran= Math.floor(Math.random()*100);
 export default function App() {
   var r1=Math.floor(Math.random()*100);
   const [getscorevalue, setscorevalue] = useState("");
   const [getNum, setNum] = useState("");
   const [getRan, setRan] = useState(ran);
   const [getCheck, setCheck] = useState("0");

   const onclick=(ms)=>{
     setNum(getNum+ms);
   }
   const onRestart=()=>{
     ran=Math.floor(Math.random()*100);
     setCheck("0");
     setNum("");
     setscorevalue("");
     setRan(ran);
   }
    const onCheck=()=>{
      if(getNum==getRan){
        setscorevalue("10");
      }
      else{
        setscorevalue("0");
      }

  }

  const SetStateValue=()=>{
    setCheck("1");
  }

  const onClear=()=>{
   setNum("") 
  }

  const FinishGame=()=>{   
    return(
      <View style={styles.container}>
        <Text> Game Finsih</Text>
        <Button title="Restrat" onPress={onRestart}></Button>
      </View>
    );
  }
  

  const StartGame=()=>{
    if(getCheck=="0"){
      return<FirstScreen p1={SetStateValue}/>
      
    }
    else if(getCheck=="1") {
      return< GameStart p1={getNum} p2={getRan} p3={onclick} p5={onCheck} p6={getscorevalue} clear={onClear} p7={setCheck}/>
      
    }
    else{
      return<FinishGame/>
      
      
    }
  }
    
  return (
    <View> 
      {
      StartGame()
      }
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
 
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   FlatList,
// } from 'react-native';


// const App = () => {

//   const [originalPrice, setOriginalPrice] = useState("");
//   const [discountPrc, setDicountPrc] = useState("");
//   const [savedAmount, setSavedAmount] = useState("0.00");
//   const [finalPrice, setFinalPrice] = useState("0.00");

//   const [calError, setCalError] = useState("");

//   const [history, setHistory] = useState([""]);
//   const [modalVisible, setModalVisible] = useState(false);


//   discountCal = () => {
//     if (discountPrc <= 100 && originalPrice >= 0 && discountPrc >= 0) {
//       var saved = (originalPrice * discountPrc) / 100;
//       var final_Price = originalPrice - saved;
//       setSavedAmount(saved.toFixed(2));
//       setFinalPrice(final_Price.toFixed(2));
//       setCalError("")
//     } else if (discountPrc > 100) {
//       setCalError("Discount Cannot be greater than 100%");
//     } else if (originalPrice < 0 || discountPrc < 0) {
//       setCalError("Original Price or Discount Price must be greater than 0");
//     }
//   }

//   saveResult = () => {
//     var dash = " | ";
//     var result = "Rs: " + originalPrice + dash + discountPrc + "% " + dash + "Rs: " + finalPrice;
//     console.log(result);
//     setHistory(oldHistory => [...history, result]);

//     setOriginalPrice("");
//     setDicountPrc("");
//   }

//   viewHistory = () => {
//     setModalVisible(true);
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Discount Calculator</Text>
//       </View>
//       <View style={styles.mainView}>
//         <TextInput keyboardType={"number-pad"} value={originalPrice} onChangeText={(orgPrice) => setOriginalPrice(orgPrice)} style={styles.textFields} placeholder={"Original Price"} />
//         <View style={{ paddingTop: 10 }} />
//         <TextInput keyboardType={"number-pad"} value={discountPrc} onChangeText={(discountPercentage) => setDicountPrc(discountPercentage)} style={styles.textFields} placeholder={"Discount %"} />
//         <View style={{ paddingTop: 20 }} />
//         <TouchableOpacity onPress={() => discountCal()} style={styles.calcBtn}>
//           <Text style={styles.calcBtnText}>Calculate</Text>
//         </TouchableOpacity>
//         <View style={{ paddingTop: 10 }} />
//         <Text style={{ fontSize: 15, color: 'red' }}>{calError}</Text>
//         <View style={{ paddingTop: 10 }} />
//         <View style={{ flexDirection: 'row' }}>
//           <Text style={styles.resultText}>Final Price :</Text>
//           <Text style={styles.finalPriceText}> Rs {finalPrice}</Text>
//         </View>
//         <View style={{ flexDirection: 'row' }}>
//           <Text style={styles.resultText}>You Saved :</Text>
//           <Text style={[styles.finalPriceText, { color: 'green' }]}> Rs {savedAmount}</Text>
//         </View>
//         <View style={{ paddingTop: 15 }} />
//         <TouchableOpacity onPress={() => saveResult()} style={styles.saveBtn}>
//           <Text style={styles.saveBtnText}>Save Result</Text>
//         </TouchableOpacity>
//         <View style={{ paddingTop: 10 }} />
//         <TouchableOpacity onPress={() => viewHistory()} style={styles.historyBtn}>
//           <Text style={styles.historyBtnText}>View History</Text>
//         </TouchableOpacity>

//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalHeading}>Discount History</Text>
//               <Text style={styles.firstIndexHistoryText}>Original Price | Discount% | Final Price</Text>
//               <FlatList

//                 data={history}
//                 renderItem={({ item }) => { return <Text style={styles.listTextItem}>{item}</Text> }}
//                 keyExtractor={(index) => { return index }} />

//               <TouchableOpacity
//                 style={{ ...styles.closeHistory, backgroundColor: "#2196F3" }}
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <Text style={styles.textStyle}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//     paddingTop: 35,
//     paddingBottom: 35,
//     paddingLeft: 10,
//     paddingRight: 10,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   closeHistory: {
//     backgroundColor: "#581845",
//     borderRadius: 5,
//     width: 100,
//     height: 30,
//     elevation: 2,
//     justifyContent: 'center'
//   },
//   textStyle: {
//     color: "#581845",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   },
//   modalHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingBottom: 10
//   },
//   firstIndexHistoryText: {
//     fontSize: 18,
//   },
//   header: {
//     backgroundColor: '#FFC300',
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOpacity: 0.8,
//     elevation: 8.0,
//     shadowRadius: 15,
//     shadowOffset: { width: 1, height: 13 },
//   },
//   headerText: {
//     fontSize: 24,
//     color: 'white'
//   },
//   mainView: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1
//   },
//   textFields: {
//     height: 50,
//     width: 280,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 10,
//     fontSize: 18,
//     borderRadius: 10,
//   },
//   calcBtn: {
//     height: 50,
//     width: 200,
//     backgroundColor: '#FFC300',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     elevation: 2,
//   },
//   calcBtnText: {
//     fontSize: 24,
//     color: 'white'
//   },
//   resultText: {
//     fontSize: 20,
//   },
//   finalPriceText: {
//     fontSize: 20,
//     fontWeight: "bold"
//   },
//   saveBtn: {
//     height: 35,
//     width: 150,
//     backgroundColor: '#388E3C',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     elevation: 2,
//   },
//   saveBtnText: {
//     fontSize: 18,
//     color: 'white'
//   },
//   historyBtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   historyBtnText: {
//     fontSize: 18,
//     color: '#581845'
//   },
//   listTextItem: {
//     fontSize: 18
//   }
// });

// export default App;