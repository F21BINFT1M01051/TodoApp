import { View, Text , Image} from 'react-native'
import React from 'react'

export default function Picture() {
  return (
    <View style={{alignSelf:'center',marginBottom:100}}>
        <Image source={require('../assets/todo.png')} style={{width:170, height:170,alignSelf:'center'}} />
        <Text style={{marginTop:5,color:'gray'}}>Start Adding Your Today's Task</Text>
    </View>
  )
}