import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Them from '../../screens/home/Them';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import DetailFood from '../../screens/detail/DetailFood';


const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Them++' component={Them}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        
    </Stack.Navigator>
  )
}

export default AccountStack

const styles = StyleSheet.create({})