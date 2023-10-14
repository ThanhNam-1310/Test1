import { StyleSheet, Text, View, Image, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const DetailFood = ({route, navigation}: any) => {
    const {item} = route.params;
    const [isModal, setIsModal] = useState(false)
    const [qty, setQty] = useState('1')

    const showModalDialog = () => {
        setIsModal(true)
    }

    const updateQty = (qty: string) => {
        let total= parseInt(qty) +1;
        setQty(total.toString())
    }
    const abtractQty = (qty: string) => {
        let total = parseInt(qty) - 1;
        setQty(total.toString())
    }

  return (
    <>
    <SafeAreaView>
    <ScrollView>
        <View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <Image source={item.uri} style={{width: '100%',}}/>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={35} color="black" />
            </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <View>

            </View>

            <View style={styles.dess}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.detail}>{item.detail}</Text>
                    <Text style={styles.detail}>Giá: {item.price} ₫</Text>
                </View>
            </View>

        </View>
        
        <View style={{alignItems: 'center', padding: 20, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 20}}>
                <TouchableOpacity style={{paddingHorizontal: 30, paddingVertical: 20}} onPress={() => abtractQty(qty)}>
                    <FontAwesome5 name="minus" size={24} color="black" />
                </TouchableOpacity> 

                <TextInput style={{borderWidth: 1, width: '25%', borderRadius: 30, textAlign: 'center', height: 55}} 
                keyboardType= 'numeric' 
                value={qty}
                onChangeText={(value) => setQty(value)}/>

                <TouchableOpacity style={{paddingHorizontal: 30, paddingVertical: 20}} onPress={() => updateQty(qty)}>
                    <FontAwesome5 name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('GioHang',{item})}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>THÊM VÀO GIỎ HÀNG</Text>
            </TouchableOpacity>

            {/* <Modal visible={isModal} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                <Text >
                     Bạn có muốn xóa công việc?
                </Text>
                </View>
            </Modal> */}
        </View>
    </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default DetailFood

const styles = StyleSheet.create({
    dess:{
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 15
        // height: '50%',
        // flex: 1,
        // justifyContent: 'center'
    },
    detail: {
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 25,
        fontSize: 25
    },
    title:{
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 25,
        fontSize: 35,
        fontWeight: '800'
    },
    but:{
        backgroundColor:'red',
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 80,
        width: '90%',
        
    },
    goBack: {
        position: 'absolute',
        top: 15,
        left: 15,
        backgroundColor: 'transparent',
        padding: 10,
    },
    modalContainer: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // height: 
    },

})