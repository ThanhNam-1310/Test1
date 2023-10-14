import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailFood from '../../screens/detail/DetailFood';

const Stack = createNativeStackNavigator();
const DetailF = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Detail_Food' component={DetailFood}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default DetailF

const styles = StyleSheet.create({})