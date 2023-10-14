import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GioHang from '../../screens/home/GioHang';


const topTab = createMaterialTopTabNavigator();
const TopNavigation = () => {
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  return (
    <topTab.Navigator>
        <topTab.Screen name='GIỎ HÀNG CỦA BẠN' component={GioHang}/>
        <topTab.Screen name='LỊCH SỬ MUA' component={GioHang}/>
    </topTab.Navigator>
  )
}

export default TopNavigation

const styles = StyleSheet.create({})