import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThucDon from '../screens/home/ThucDon';
import GioHang from '../screens/home/GioHang';
import AccountStack from './stacks/AccountStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName:any

        if (route.name === 'Nha') {
          iconName = focused ? 'home' : 'home-outline'
        }
        else if (route.name === 'ThucDon') {
          iconName = focused ? 'fast-food' : 'fast-food-outline'
        }
        else if (route.name === 'GioHang') {
          iconName = focused ? 'cart' : 'cart-outline'
        }
        else if (route.name === 'Them') {
          iconName = focused ? 'menu' : 'menu-outline'
        }
        return <Ionicons name={iconName} size={size=30} color={color}/>
      }
    })}>
            <Tab.Screen name="Nha" component={Home} options={{headerShown: false, tabBarLabel: 'Nha'}} />
            <Tab.Screen name="ThucDon" component={ThucDon} options={{headerShown: false,tabBarLabel: 'ThucDon'}}/>
            <Tab.Screen name="GioHang" component={GioHang} options={{headerShown: false, tabBarLabel: 'GioHang'}}/>
            <Tab.Screen name="Them" component={AccountStack} options={{headerShown: false, tabBarLabel: 'Them'}}/>
    </Tab.Navigator>
    
  )
}

export default TabNavigation

const styles = StyleSheet.create({})