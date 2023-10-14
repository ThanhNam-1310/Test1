import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Them = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginVertical: 10, textAlign: 'center'}}>Bắt đầu</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red', marginBottom: 10}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue', marginBottom: 10}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Them

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})