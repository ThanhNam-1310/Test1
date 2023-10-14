import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/header'
import Checkbox from 'expo-checkbox'

const Register = ({navigation}: any) => {
    const [isSelected, setSelection] =useState(false)

  return (
    <View style={{flex: 1}}>
        <Header/>
        <ScrollView style={{flex: 1}}>
            <View style={{paddingHorizontal: 20, paddingTop: 60}}>
                <Text style={styles.mainText}>Tạo tài khoản</Text>

                <View style={styles.content}>
                    <TextInput placeholder="Họ của bạn" style={styles.inputText} />
                    <TextInput placeholder="Tên của bạn" style={styles.inputText} />
                    <TextInput placeholder="Số điện thoại" style={styles.inputText} />
                    <TextInput placeholder="Địa chỉ E-mail" style={styles.inputText} />
                    <TextInput placeholder="Mật khẩu" style={styles.inputText} secureTextEntry={true}/>
                </View>

                <View style={{paddingTop: 30, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        color={isSelected ? '#4630EB' : undefined}/>
                    <Text style={{fontSize: 20, paddingHorizontal: 15}}>Tôi đồng ý với các điều khoản.</Text>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.TouchableButton}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: '700'}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
                    <Text>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{paddingHorizontal: 10, fontWeight:'600', fontSize: 15}}>Đăng nhập.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    content: {
        alignItems: "flex-start",
        width: "100%",
    },
    mainText: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: "900",
        paddingBottom: 20
    },
    inputText: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: '100%',
        paddingVertical: 20, 
        paddingLeft: 15,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20
    },    
    TouchableButton: {
        backgroundColor: '#E4002B',
        borderRadius: 40,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 5
    },
})