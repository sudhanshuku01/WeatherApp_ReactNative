import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { StyleSheet, Text,ScrollView,StatusBar,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
export type RootStackParamlist={
  Home:undefined;
  Details:{citydata:data}
}
const Stack=createNativeStackNavigator<RootStackParamlist>();

const App = ():JSX.Element => {
  return (
      <>
       <StatusBar 
        animated={true}
        backgroundColor="#005bc5"
      />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home">
          <Stack.Screen 
          name='Home'
          component={Home}
          />
          <Stack.Screen 
          name='Details'
          component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})