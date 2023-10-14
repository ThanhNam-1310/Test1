import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/Home';
import ThucDon from '../../screens/home/ThucDon';
import KhuyenMai from '../../screens/home/KhuyenMai';
import GioHang from '../../screens/home/GioHang';
import Them from '../../screens/home/Them';

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}: any) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Nha" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="ThucDon" component={ThucDon}/>
            <Tab.Screen name="KhuyenMai" component={KhuyenMai}/>
            <Tab.Screen name="GioHang" component={GioHang}/>
            <Tab.Screen name="Them" component={Them}/>
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})