import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const DatHangNgay = ({navigation}: any) => {
    
  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
        <Text style={{fontSize: 35, fontWeight: '800', color: '#FFD154', paddingBottom: 50, paddingTop: 150}}>BẮT ĐẦU ĐẶT HÀNG</Text>
        <View style={styles.box}>
            <View style={{ alignItems: 'center', paddingTop: 90, paddingBottom: 20}}>
                <TouchableOpacity style={styles.button}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Sử dụng vị trí hiện tại của tôi</Text>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TextInput placeholder='Nhập địa chỉ của bạn hoặc nơi gần bạn' style={styles.textInput}/>
            </View>

            <View style={{alignItems: 'flex-end', paddingRight: 20}}>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Tiếp theo</Text>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </View>
                </TouchableOpacity>
            </View>   
        </View>

    </View>
    </>
  )
}

export default DatHangNgay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D3D3D',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#EEE6DD',
        borderColor: 'blue',
        height: 350,
        width: '90%',
        borderRadius: 20,
    },
    button: {
        borderWidth: 1,
        width: '85%',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#028500',
        borderColor: '#028500',

    },
    textInput: {
        borderWidth: 1,
        width: '90%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 30, 
        borderRadius: 10,
        // justifyContent: 'center',
    },
    nextButton: {
        borderWidth: 1,
        width: '35%',
        paddingHorizontal: 10,
        height: 50,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        borderColor: 'red',
        
    }
})