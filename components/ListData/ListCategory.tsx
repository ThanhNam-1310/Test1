import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'


const ListCategory = ({navigation, route}: any) => {
    

    const categoryData = [
        {id:'a', name:'Combo Nhóm 1', detail:'3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi', price:'170.000', uri: require('../../assets/ThucDon/Combo_Nhom/D6.jpg')},
        {id:'b', name:'Combo Nhóm 2', detail:'4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon', price:'200.000', uri: require('../../assets/ThucDon/Combo_Nhom/D7-new.jpg')},
        {id:'c', name:'Combo Nhóm 3', detail:'5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon', price:'230.000', uri: require('../../assets/ThucDon/Combo_Nhom/D8-new.jpg')},
        {id:'d', name:'Combo Gà Zero HD', detail:'02 Miếng Gà Rán + 02 Gà Miếng Nuggets + 01 Pepsi Không Calo Lon', price:'95.000', uri: require('../../assets/ThucDon/New_Food/combo-pepsi-zero.jpg')},
        {id:'e', name:'Combo Gà Que Kem Xốt ', detail:'1 Gà Que Kem Xốt Cajun + 1 Burger + 1 Pepsi Lon', price:'90.000', uri: require('../../assets/ThucDon/New_Food/A-Cajun.jpg')},
    ]

    //Hiển thị categoryData.
    const renderCategory = ({item}: any) => {
        return(
            <View style={styles.border}>
                
                <View style={{alignItems: 'center', marginHorizontal:5}}>
                    <Image source={item.uri} 
                        style={{width: '100%', height: 300, borderTopLeftRadius: 10, borderTopRightRadius: 10}} 
                        resizeMode="cover"/>
                </View>
                <View>
                    <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center', paddingVertical: 15,}}>{item.name}</Text>
                    <Text style={{textAlign: 'center', paddingHorizontal: 10,paddingBottom: 10,fontSize: 15}}>{item.detail}</Text>
                    <Text style={{textAlign: 'right', paddingRight: 50, fontSize: 25}}>{item.price} ₫</Text>
                    
                </View>

                <View style={{paddingVertical: 15, alignItems: 'center'}}>
                    <TouchableOpacity style={styles.TouchableHandle}>
                        <Text style={styles.Text_Touchable}>Xem ngay</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
  return (
    <>
        <View style={{backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <View>
                <Text style={{fontSize: 30, fontWeight: '700', paddingBottom: 10, paddingTop: 30, paddingHorizontal: 15}}>Có thể bạn thích</Text>
            </View>
            <FlatList data={categoryData}
                renderItem={renderCategory}
                horizontal/>
        </View>
    </>
  )
}

export default ListCategory

const styles = StyleSheet.create({
    border: {

        flex: 1, 
        borderWidth: 1, 
        marginHorizontal: 5, 
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 4 },      //Khoảng cách ngang- dọc của đổ bóng.
        shadowOpacity: 0.6,     //Độ trong suốt của đổ bóng{nhạt: 0, đậm: 1}
        shadowRadius: 5,        //Bán kính đổ bóng.
        elevation: 5, // Đối với Android
        width: 350,
        height: 550
    },
    TouchableHandle: {
        // backgroundColor: '#f96163',
        backgroundColor:'red',
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 80,
        width: '70%'
    },
    Text_Touchable: {
        fontSize: 20, 
        color: '#fff', 
        fontWeight: '700',
    },
})