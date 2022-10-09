import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function NavBar() {
    const [name,setName]=useState("tharu");
    const update =()=>{
        setName("Sathsara")
    }

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}