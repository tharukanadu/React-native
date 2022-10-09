import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Ologing from './screen/Ologin';
import Register from './screen/Register';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Ologing" component={Ologing} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
      }</NavigationContainer>
  )
}
const style= StyleSheet.create({
  Text:{color:"#FFBF00",fontSize:30}
})