import React, { useEffect, useState } from 'react'
import { exampledata } from '../utils/Fetchdata'
import barlogo from '../assets/menu.png'
import searchicon from '../assets/search.png'
import visbilityimg from '../assets/visibility.png'
import windimg from '../assets/wind.png'
import humidityimg from '../assets/humidity.png'
import pressureimg from '../assets/barometer.png'
import axios from 'axios'
import Location from './Location'
import { StyleSheet, Text, View,Image ,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'


import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamlist } from '../App'
type Homeprops=NativeStackScreenProps<RootStackParamlist,'Home'>

const Home = ({navigation}:Homeprops) => {
  const [city,setCity]=useState('');
  const [data,setData]=useState<data>(exampledata)
const fetchData=async ()=>{
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: city},
      headers: {
        'X-RapidAPI-Key': 'put your key here',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    if(response){
      setData(response.data)
      console.log(response.data)
    }
  } catch (error) {
    console.error(error);
    throw(error)
  }
}

  return (
    <SafeAreaView style={styles.homepage}>
      <View style={styles.header}>
        <Image 
        style={styles.menuimg}
        source={barlogo}
        />
       <View style={styles.inputview}>
       <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Enter City Name"
        keyboardType="default"
      />
       <TouchableOpacity
       activeOpacity={0.7}
       onPress={()=>fetchData()}
       >
       <Image 
        style={styles.menuimg}
        source={searchicon}
        />
       </TouchableOpacity>
       </View>
      </View>
      {/* location */}
     <Location {...data}/>
      <View style={styles.reportcard}>
          <Text style={styles.day}>Updated At : {data.current.last_updated}</Text>
          <Image
          style={styles.weatherimg}
           source={{
            uri:`https:${data.current.condition.icon}`
           }}
          />
        <View style={styles.reportcardp2}>
           <Text style={styles.condition}>{data.current.condition.text}</Text>
           <Text style={styles.temp}>{data.current.temp_c}'C</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.addinfocont}>
        <View  style={styles.addinfoitem} >
          <Image
           style={styles.addinfoimg}
          source={humidityimg}
          />
          <Text  style={styles.addinfoamt}>{data.current.humidity}%</Text>
          <Text  style={styles.addinfotxt}>Humidity</Text>
        </View>
        <View  style={styles.addinfoitem} >
          <Image
           style={styles.addinfoimg}
          source={pressureimg}
          />
          <Text  style={styles.addinfoamt}>{data.current.pressure_in}</Text>
          <Text  style={styles.addinfotxt}>Humidity</Text>
        </View>
        <View  style={styles.addinfoitem} >
          <Image
           style={styles.addinfoimg}
          source={windimg}
          />
          <Text  style={styles.addinfoamt}>{data.current.wind_kph}kph</Text>
          <Text  style={styles.addinfotxt}>Wind Speed</Text>
        </View>
        <View  style={styles.addinfoitem} >
          <Image
           style={styles.addinfoimg}
          source={visbilityimg}
          />
          <Text  style={styles.addinfoamt}>{data.current.vis_km}km</Text>
          <Text  style={styles.addinfotxt}>visibility</Text>
        </View>
      </View>
      <TouchableOpacity
       activeOpacity={0.5}
       style={styles.moredetail}>
        <Text 
        onPress={()=>navigation.navigate('Details',{citydata:data})}
        style={styles.moredetailtxt}>More Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  homepage:{
    backgroundColor:'#005bc5',
    flex:1
  },
  header:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   paddingVertical:5,
   paddingHorizontal:10,
   marginTop:10
  },
  inputview:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:8,
  },
  menuimg:{
    height:30,
    width:30,
    tintColor:'white'
  },
  input:{
  fontSize:17,
  backgroundColor:'white',
  paddingVertical:7,
  paddingHorizontal:10,
  width:220,
  borderRadius:8,
  },
  reportcard:{
    backgroundColor:'#012677',
    padding:20,
    margin:20,
    borderRadius:20
    // maxWidth:'auto'
  },

  weatherimg:{
    height:100,
    width:100,
    // tintColor:'white'
  },
  reportcardp2:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
   justifyContent:'space-between'
  },
  day:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  condition:{
  color:'white',
  fontSize:35,
  fontStyle:'italic'
  // fontWeight:'bold'
  },
  temp:{
    color:'white',
    fontSize:50,
  },
  addinfocont:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#483078',
    justifyContent:'center',
    padding:10,
    gap:8,
    borderRadius:10
  },
  addinfoitem:{
    backgroundColor:'white',
    width:80,
    display:'flex',
    alignItems:'center',
    padding:10,
    borderRadius:30
  },
  addinfoimg:{
    width:30,
    height:30,
  },
  addinfoamt:{
  fontWeight:'bold',
  fontSize:19,
  color:'black'
  },
  addinfotxt:{
  color:'black'
  },
  moredetail:{
  marginVertical:50,
  marginHorizontal:10
  },
  moredetailtxt:{
    color:'black',
    fontWeight:'bold',
    fontSize:16,
    backgroundColor:'white',
    width:100,
    textAlign:'center',
    borderRadius:20,
    paddingVertical:4,
    paddingHorizontal:8
  },


})

export default Home
