import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import Ologing from './screen/Ologin';
import Register from './screen/Register';


export default function App() {
  return (
    <View>
      <Ologing/>
     
      <Text style={style.Text}>Hello ijse</Text>
    

      <Register/>
    </View>
  )
}
const style= StyleSheet.create({
  Text:{color:"#FFBF00",fontSize:30}
})