import { Alert, Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Header = ({navigation}:any) => {
  const [isModal, setIsModal] = useState(false)
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>F-Food</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity >
        <AntDesign name="search1" size={34} color="black" style={{paddingHorizontal: 15}}/>
      </TouchableOpacity>
    </View>
    {/* <Modal animationType='slide' transparent={true}
          visible={isModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setIsModal(!isModal);
          }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsModal(!isModal)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setIsModal (true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        height: 150,
        paddingTop: 40,
      },
      text: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold'
      },
      modal: {
        backgroundColor: 'white',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingLeft: 15,
        // paddingRight: 15,
        // height: 150,
        // paddingTop: 40,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})