import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import Circle from '../Components/Circle'

const Splash = (props) => {
  return (
    <View style={{backgroundColor:'#f6f6f6', height:'100%'}}>
        <Circle />
        <View style={{justifyContent:'center', alignItems:'center'}} >
            <Image source={require('../assets/to-do.jpg')}  style={{width:250, height:250}}  />
            <Text style={{fontSize:22, fontWeight:'500', marginTop:50,}}>Get things done with TODO</Text>
            <Text style={{fontSize:16, marginTop:10}}>Lorem ipsum doller site</Text>
            <Text>hello world Lorem ipsum doller site</Text>
            <View style={{marginTop:100}}>
                <ButtonComponent title = {'Get Started'} press = {()=> props.navigation.navigate('Login')} />
            </View>
        </View>
        
        
    </View>
  )
}

export default Splash