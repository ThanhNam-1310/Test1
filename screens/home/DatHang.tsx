import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'

const DatHang = ({navigation}: any) => {
  return (
    <View>
      <Header></Header>
        <Text>Dathang</Text>
        <Button title='Go Back' onPress={() => navigation.goBack()}></Button>
    </View>
  )
}

export default DatHang

const styles = StyleSheet.create({})