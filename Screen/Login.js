import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Circle from '../Components/Circle'
import Field from '../Components/Field'
import ButtonComponent from '../Components/ButtonComponent'

const Login = (props) => {
    return (
        <View style={{backgroundColor:'#f6f6f6', height:'100%'}}>
            <Circle />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop:-60}}>
                    <Text style={{fontSize:20, fontWeight:'600'}}>Welcome Back!</Text>
                    <Text style={{marginTop:5,fontSize:14}}>Let help's you to meet your tasks</Text>
                    <View style={{marginTop:20}}>
                        <Image source={require('../assets/task.jpg')}  style={{width:290, height:250, borderRadius:120}} />
                    </View>
                    <View style={{marginTop:20}}>
                        <Field placeholder={'Enter your Email'} />
                        <Field placeholder={'Password'} choice={true} />

                    </View>
                    <View style={{marginTop:20}}>
                        <TouchableOpacity>
                            <Text style={{color:'orange',fontSize:16,fontWeight:'600'}}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20}}>
                        <ButtonComponent title = {'Login'} press = {()=> props.navigation.navigate('TodoScreen')} />
                    </View>
                    <View style={{flexDirection:'row', marginTop:20}}> 
                        <Text style={{fontSize:14}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('SignUp')}>
                            <Text style={{color:'orange', fontSize:14}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})