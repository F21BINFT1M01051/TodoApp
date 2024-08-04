import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Circle from '../Components/Circle'
import Field from '../Components/Field'
import ButtonComponent from '../Components/ButtonComponent'

const SignUp = (props) => {
    return (
        <View style={{backgroundColor:'#f6f6f6', height:'100%'}}>
            <Circle />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop:-20}}>
                    <Text style={{fontSize:20, fontWeight:'600'}}>Welcome Onboard!</Text>
                    <Text style={{marginTop:5,fontSize:14}}>Let help's you to meet your tasks</Text>
                   
                    <View style={{marginTop:50}}>
                    <Field placeholder={'Enter your Name'} choice={false} />
                        <Field placeholder={'Enter your Email'} choice={false} />
                        <Field placeholder={'Password'} choice={true} />
                        <Field placeholder={'Confirm Password'} choice={true} />
                    </View>
                    <View style={{marginTop:90}}>
                        <ButtonComponent title = {'Registe'} press = {()=>props.navigation.navigate('Login')} />
                    </View>
                    <View style={{flexDirection:'row', marginTop:20}}> 
                        <Text style={{fontSize:14}}>Already have an account? </Text>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                            <Text style={{color:'orange', fontSize:14}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})