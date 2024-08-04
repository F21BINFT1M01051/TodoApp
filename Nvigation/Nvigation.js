import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/Splash';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import TodoScreen from '../Screen/TodoScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='TodoScreen' component={TodoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}