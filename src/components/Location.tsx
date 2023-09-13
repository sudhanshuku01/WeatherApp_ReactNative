import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import locimg from '../assets/pin.png'
const Location = (params:data) => {
  return (
    <View style={styles.locationview}>
    <Image 
    style={styles.locationimg}
    source={locimg}
    />
    <Text
    style={styles.locationtxt}
    >{params.location.name},{params.location.country}</Text>
  </View>
  )
}

export default Location

const styles = StyleSheet.create({
    locationview:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        padding:10,
        marginTop:10
      },
      locationimg:{
        width:30,
        height:30,
        tintColor:'white'
      },
      locationtxt:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
      },
})