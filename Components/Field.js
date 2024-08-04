import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'

const Field = (props) => {
  return (
    <View>
        <TextInput style={{width:350, height:50, backgroundColor:'white', borderRadius:30, paddingHorizontal:20, marginTop:20}} placeholder={props.placeholder} placeholderTextColor={'gray'} secureTextEntry={props.choice} />
    </View>
  )
}

export default Field

