import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamlist } from '../App'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type Detailsprops =NativeStackScreenProps<RootStackParamlist,'Details'>

import Location from './Location'
const Details = ({route}:Detailsprops) => {
    const {citydata}=route.params;
    const navigation=useNavigation <NativeStackNavigationProp <RootStackParamlist>>();
    const arrofdata:{[key: string]: number | string}={
      "wind_kph": citydata.current.wind_kph,
      "wind_degree": citydata.current.wind_degree,
      "wind_dir": citydata.current.wind_dir,
      "pressure_mb": citydata.current.pressure_mb,
      "precip_mm": citydata.current.precip_mm,
      "humidity": citydata.current.humidity,
      "cloud": citydata.current.cloud,
      "feelslike_c": citydata.current.feelslike_c,
      "feelslike_f": citydata.current.feelslike_f,
      "vis_km": citydata.current.vis_km,
      "uv": citydata.current.uv,
      "gust_mph": citydata.current.gust_kph,
    } 
  return (
    <View style={styles.detailpage}>
      <Location {...citydata}/>
      <View>
        {      
          Object.keys(arrofdata).map((key,index)=>(
            <View key={index} style={styles.onerow}>
            <Text style={styles.key}>{key.toUpperCase()} : </Text>
            <Text style={styles.value}>{arrofdata[key]}</Text>
          </View>
          ))
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  detailpage:{
    backgroundColor:'#005bc5',
    flex:1
  },
  onerow:{
   padding:10,
   display:'flex',
   flexDirection:'row',
   gap:10,
   borderBottomColor:'white',
   borderBottomWidth:2
  },
  key:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  value:{
    color:'white',
    fontWeight:'bold',
    fontSize:22
  }
})

export default Details
