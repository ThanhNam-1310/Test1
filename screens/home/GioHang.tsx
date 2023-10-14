import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'

const GioHang = ({route, navigation}: any) => {
  const {item} = route.params;
  return (
   <>
      <View>
        <Header/>
      </View>
   </>
  )
}

export default GioHang

const styles = StyleSheet.create({})