import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const DatMua = () => {
  return (
    <View style={styles.content_1}>
        <View style={{flexDirection: 'row', marginHorizontal: 15, paddingVertical: 25}}>
            <Text style={styles.text_content_1}>Đặt Ngay </Text>
            <MaterialIcons name="delivery-dining" size={24} color="white" />
            <Text style={styles.text_content_1}>Giao hàng </Text>
            <FontAwesome5 name="shopping-bag" size={24} color="white" />
            <Text style={styles.text_content_1}>Mang đi </Text>
        </View>

        <View style={{paddingVertical: 20}}>
            <TouchableOpacity onPress={() => {}} style={styles.TouchableHandle}>
                <Text style={styles.Text_Touchable}>Bắt đầu đặt hàng ngay </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DatMua

const styles = StyleSheet.create({
    content_1:{
        backgroundColor: 'black',
        alignItems:'center',
        height: 180,
    },
    text_content_1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 15,
    },
    Text_Touchable: {
        fontSize: 20, 
        color: '#fff', 
        fontWeight: '700',
    },
    TouchableHandle: {
        // backgroundColor: '#f96163',
        backgroundColor:'red',
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 80,
    },
})